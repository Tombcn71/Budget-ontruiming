"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a3e71a08-f689-4dcc-a576-03c94f9a3938",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          from_name: "Budget Ontruiming Website",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Naam <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Uw volledige naam"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="bg-background"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="uw.email@voorbeeld.nl"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="bg-background"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Telefoon (optioneel)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="0629 759 181"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
          className="bg-background"
        />
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="subject">
          Onderwerp <span className="text-destructive">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Waar gaat uw bericht over?"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="bg-background"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Bericht <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Vertel ons over uw situatie..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          rows={6}
          className="bg-background resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verzenden...
          </>
        ) : (
          "📧 Verstuur Bericht"
        )}
      </Button>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-green-800 dark:text-green-200">Bericht verzonden!</p>
            <p className="text-sm text-green-700 dark:text-green-300">
              Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-800 dark:text-red-200">Er ging iets mis</p>
            <p className="text-sm text-red-700 dark:text-red-300">
              Het bericht kon niet worden verzonden. Probeer het opnieuw of bel ons direct.
            </p>
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <p className="text-xs text-muted-foreground">
        Door dit formulier te versturen gaat u akkoord met onze{" "}
        <a href="/privacy" className="text-primary hover:underline">
          privacyverklaring
        </a>
        .
      </p>
    </form>
  )
}

