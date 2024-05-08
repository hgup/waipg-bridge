import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { GearIcon } from "@radix-ui/react-icons"
import PowerGrid from "@/components/powergrid"

export default function Dashboard() {
  return (
    <main className="px-4 md:p-0 mb-16 mt-24 ">
      <section className="mx-auto flex flex-col items-center gap-6 pb-10  mt-16 max-w-3xl">
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span className="bg-primary text-primary-foreground font-mono py-2 px-6 rounded-full text-5xl">
              wAIPG/AIPG
            </span>{" "}
            <span>Token Bridge</span>
          </div>
        </h1>
        <span className="md:max-w-[750px] inline-block align-top decoration-inherit max-w-[543px] text-center text-lg text-foreground mt-2 md:mt-0">
          Welcome to the <strong>AIPG/wAIPG</strong> Token Bridge!
        </span>
        <Alert className="max-w-xl mt-6">
          <GearIcon className="size-4" />
          <AlertTitle>Wrap or Unwrap tokens Securely</AlertTitle>
          <AlertDescription>
            Click to begin your journey across the bridge
          </AlertDescription>
        </Alert>
      </section>

      <section className="mx-auto max-w-xl">
        <PowerGrid />
      </section>
    </main>
  )
}
