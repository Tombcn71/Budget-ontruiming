"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext<{
  openItem: string | null
  setOpenItem: (value: string | null) => void
}>({
  openItem: null,
  setOpenItem: () => {},
})

const ItemContext = React.createContext<string>("")

interface AccordionProps {
  type: "single"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

export function Accordion({ children, className }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <ItemContext.Provider value={value}>
      <div className="border-b border-border">{children}</div>
    </ItemContext.Provider>
  )
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { openItem, setOpenItem } = React.useContext(AccordionContext)
  const itemValue = React.useContext(ItemContext)
  const isOpen = openItem === itemValue

  return (
    <button
      className={`flex w-full items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
      onClick={() => setOpenItem(isOpen ? null : itemValue)}
    >
      {children}
      <ChevronDown
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  )
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { openItem } = React.useContext(AccordionContext)
  const itemValue = React.useContext(ItemContext)
  const isOpen = openItem === itemValue

  return (
    <div
      className={`overflow-hidden transition-all ${
        isOpen ? "max-h-96 pb-4" : "max-h-0"
      }`}
    >
      <div className={className}>{children}</div>
    </div>
  )
}

