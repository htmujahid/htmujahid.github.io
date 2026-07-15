import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Button variant="outline" size="lg" onClick={copyEmail} className="gap-2">
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copied" : "Copy email"}
    </Button>
  )
}
