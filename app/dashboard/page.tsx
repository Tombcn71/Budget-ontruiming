"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Euro, Clock, CheckCircle2, XCircle, MessageSquare } from "lucide-react"

interface QuoteRequest {
  id: string
  created_at: string
  naam: string
  email: string
  telefoon: string
  postcode: string
  woning_type: string
  vierkante_meter: number
  verdieping: string
  lift_aanwezig: boolean
  volume_level?: string
  total_price: number
  status: 'pending' | 'contacted' | 'converted' | 'lost'
  notes?: string
  last_contacted_at?: string
}

export default function DashboardPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'contacted' | 'converted' | 'lost'>('all')

  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      const res = await fetch('/api/quotes')
      const data = await res.json()
      setQuotes(data.quotes || [])
    } catch (error) {
      console.error('Error fetching quotes:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: QuoteRequest['status']) => {
    try {
      await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      fetchQuotes()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const sendFollowUp = async (quote: QuoteRequest, template: 'day3' | 'day7' | 'price_match') => {
    try {
      await fetch('/api/follow-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quoteId: quote.id, template }),
      })
      alert('Follow-up email verstuurd!')
      updateStatus(quote.id, 'contacted')
    } catch (error) {
      console.error('Error sending follow-up:', error)
      alert('Fout bij versturen')
    }
  }

  const filteredQuotes = quotes.filter(q => {
    if (filter === 'all') return true
    return q.status === filter
  })

  const stats = {
    total: quotes.length,
    pending: quotes.filter(q => q.status === 'pending').length,
    contacted: quotes.filter(q => q.status === 'contacted').length,
    converted: quotes.filter(q => q.status === 'converted').length,
    lost: quotes.filter(q => q.status === 'lost').length,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500'
      case 'contacted': return 'bg-blue-500'
      case 'converted': return 'bg-green-500'
      case 'lost': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Pending'
      case 'contacted': return 'Contacted'
      case 'converted': return 'Akkoord'
      case 'lost': return 'Lost'
      default: return status
    }
  }

  const getDaysAgo = (date: string) => {
    const days = Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24))
    if (days === 0) return 'Vandaag'
    if (days === 1) return '1 dag geleden'
    return `${days} dagen geleden`
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Laden...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Offerte Aanvragen Overzicht</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
              <div className="text-sm text-gray-500">Totaal</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
              <div className="text-sm text-gray-500">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600">{stats.contacted}</div>
              <div className="text-sm text-gray-500">Contacted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600">{stats.converted}</div>
              <div className="text-sm text-gray-500">Akkoord</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-gray-600">{stats.lost}</div>
              <div className="text-sm text-gray-500">Lost</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Tabs value={filter} onValueChange={(v: any) => setFilter(v)} className="mb-6">
          <TabsList>
            <TabsTrigger value="all">Alle ({stats.total})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
            <TabsTrigger value="contacted">Contacted ({stats.contacted})</TabsTrigger>
            <TabsTrigger value="converted">Akkoord ({stats.converted})</TabsTrigger>
            <TabsTrigger value="lost">Lost ({stats.lost})</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Quotes List */}
        <div className="space-y-4">
          {filteredQuotes.length === 0 ? (
            <Card>
              <CardContent className="pt-12 pb-12 text-center text-gray-500">
                Geen offerte aanvragen gevonden
              </CardContent>
            </Card>
          ) : (
            filteredQuotes.map((quote) => (
              <Card key={quote.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    
                    {/* Left: Customer Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{quote.naam}</h3>
                        <Badge className={getStatusColor(quote.status)}>
                          {getStatusLabel(quote.status)}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${quote.email}`} className="hover:text-orange-600">
                            {quote.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${quote.telefoon}`} className="hover:text-orange-600">
                            {quote.telefoon}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {quote.postcode} - {quote.woning_type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {getDaysAgo(quote.created_at)}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {quote.vierkante_meter}m²
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {quote.verdieping}
                        </span>
                        {quote.lift_aanwezig && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                            Lift ✓
                          </span>
                        )}
                        {quote.volume_level && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {quote.volume_level}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Price & Actions */}
                    <div className="md:text-right space-y-3">
                      <div>
                        <div className="text-3xl font-bold text-green-600 flex items-center justify-end gap-1">
                          <Euro className="w-6 h-6" />
                          {quote.total_price.toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500">incl. BTW</div>
                      </div>

                      {/* Status Actions */}
                      {quote.status === 'pending' && (
                        <div className="flex flex-wrap gap-2 justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateStatus(quote.id, 'contacted')}
                            className="text-xs"
                          >
                            <MessageSquare className="w-3 h-3 mr-1" />
                            Contacted
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-50 text-xs"
                            onClick={() => updateStatus(quote.id, 'converted')}
                          >
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Akkoord
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-gray-600 text-xs"
                            onClick={() => updateStatus(quote.id, 'lost')}
                          >
                            <XCircle className="w-3 h-3 mr-1" />
                            Lost
                          </Button>
                        </div>
                      )}

                      {quote.status === 'contacted' && (
                        <div className="flex flex-wrap gap-2 justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-50 text-xs"
                            onClick={() => updateStatus(quote.id, 'converted')}
                          >
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Akkoord
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-gray-600 text-xs"
                            onClick={() => updateStatus(quote.id, 'lost')}
                          >
                            <XCircle className="w-3 h-3 mr-1" />
                            Lost
                          </Button>
                        </div>
                      )}

                      {/* Follow-up Buttons (only for pending/contacted) */}
                      {(quote.status === 'pending' || quote.status === 'contacted') && (
                        <div className="flex flex-col gap-1">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="text-xs w-full"
                            onClick={() => sendFollowUp(quote, 'day3')}
                          >
                            Follow-up: Nog vragen?
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="text-xs w-full"
                            onClick={() => sendFollowUp(quote, 'price_match')}
                          >
                            Follow-up: Price Match
                          </Button>
                        </div>
                      )}
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

      </div>
    </div>
  )
}

