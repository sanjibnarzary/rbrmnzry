"use client"

import * as React from "react"
import { Check, Languages } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { value: "en", label: "English" },
  { value: "brx", label: "Bodo" },
  { value: "as", label: "Assamese" },
  { value: "bn", label: "Bengali" },
];

export function LanguageSwitch() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => setSelectedLanguage(lang.value)}
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                selectedLanguage === lang.value ? "opacity-100" : "opacity-0"
              )}
            />
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
