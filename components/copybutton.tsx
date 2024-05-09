"use client"
import React from "react"
// Functional Component with useRef hook.
import { useClipboard } from "use-clipboard-copy"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CheckIcon } from "lucide-react"

export default function CopyButton({ text }: { text: string }) {
  const clipboard = useClipboard()
  const [status, setStatus] = React.useState("click to copy")

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} defaultOpen={true}>
        <div>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="flex flex-row gap-2 items-center text-muted-foreground font-semibold tracking-wide max-w-[320px] md:w-min text-xs border py-2.5 px-6 rounded-lg mx-auto  "
              onClick={(e) => {
                clipboard.copy(text)
                setStatus("copied")
              }}
            >
              <span className="h-4 truncate">{text}</span>
              {status === "copied" ? <CheckIcon className="size-4" /> : null}
            </button>
          </TooltipTrigger>
        </div>
        <TooltipContent className="p-1 px-3 text-xs">{status}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
