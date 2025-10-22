"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 gap-4">
          <div className="flex-1 text-center">
            <span className="text-sm text-white font-medium text-foreground">
Woningontruiming met laagste prijs garantie. Ergens anders goedkoper? Wij betalen het verschil! Krijg een prijsindicatie in 1 minuut!
            </span>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Sluit banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
