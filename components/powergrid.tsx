"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoveLeft, MoveRight } from "lucide-react"
import React from "react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { GearIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export default function PowerGridWrapper() {
  const [show, setShow] = React.useState(false)
  const [wrap, setWrap] = React.useState(true)

  if (show)
    return (
      <>
        <div className="flex flex-row max-w-xl gap-2 md:gap-14 justify-center mt-2 mb-4 items-center">
          <Image
            width={409}
            height={514}
            className="size-32 bg-cover"
            src="/AIPG.png"
            alt={"AIPG"}
          />
          {wrap ? (
            <MoveRight className="size-12 text-accent-foreground fade-in-50" />
          ) : (
            <MoveLeft className="size-12 text-accent-foreground fade-in-50" />
          )}
          <Image
            width={409}
            height={514}
            className="size-32 bg-cover"
            src="/ETH.png"
            alt={"Ethereum"}
          />
        </div>
        <PowerGridMain setWrap={setWrap} />
      </>
    )
  else
    return (
      <div className="flex flex-col gap-5 items-center">
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
        <div className="w-full flex justify-center">
          <Button
            className="mx-auto text-lg px-7 py-5"
            onClick={(e) => {
              setShow(true)
            }}
          >
            Begin
          </Button>
        </div>
      </div>
    )
}

const wrapformInputs = [
  {
    id: "aipg",
    label: "AIPG amount to deposit",
    placeholder: "Amount of AIPG",
  },
  {
    id: "ethaddr",
    label: "Ethereum Address",
    placeholder: "Your Ethereum Address",
  },
]
const unwrapformInputs = [
  {
    id: "aipg",
    label: "wAIPG amount to unwrap (burn)",
    placeholder: "Amount of wAIPG",
  },
  {
    id: "ethaddr",
    label: "Ethereum Address",
    placeholder: "Your Ethereum Address",
  },
  {
    id: "holdingaddr",
    label:
      "AIPG Holding address that you sent your coins to during the mint process",
    placeholder: "AIPG Holding Address",
  },
  {
    id: "receivingaddr",
    label:
      "AIPG Receiving address on your wallet that you want to receive your coins at during this burn process",
    placeholder: "AIPG Receiving Address",
  },
]
const postSteps = [
  {
    id: "adminaddr",
    label: "AIPG Admin Address",
    placeholder: "AIPG Admin Address",
  },
  {
    id: "transactionhash",
    label: "Transaction Hash of wAIPG from User to Admin",
    placeholder: "Transaction Hash of wAIPG from User to Admin",
  },
]

const wrapFormSchema = z.object({
  aipg: z.string().min(2, {
    message: "Enter a valid AIPG address",
  }),
  ethaddr: z.string().min(2, {
    message: "Enter a valid Ethereum address",
  }),
})
const unwrapFormSchema = z.object({
  aipg: z.string().min(2, {
    message: "Enter a valid AIPG address",
  }),
  ethaddr: z.string().min(2, {
    message: "Enter a valid Ethereum address",
  }),
  holdingaddr: z.string().min(2, {
    message: "Enter a valid Ethereum address",
  }),
  receivingaddr: z.string().min(2, {
    message: "Enter a valid Ethereum address",
  }),
  adminaddr: z.string().min(2, {
    message: "Enter a valid Ethereum address",
  }),
  transactionhash: z.string().min(2, {
    message: "Enter a valid Ethereum address",
  }),
})

const PowerGridMain = ({ setWrap }: { setWrap: Function }) => {
  const wrapForm = useForm<z.infer<typeof wrapFormSchema>>({
    resolver: zodResolver(wrapFormSchema),
    defaultValues: {},
  })

  const unwrapForm = useForm<z.infer<typeof unwrapFormSchema>>({
    resolver: zodResolver(unwrapFormSchema),
    defaultValues: {},
  })
  const wrapSubmit = (data: z.infer<typeof wrapFormSchema>) => {
    console.log(data)
  }
  const unwrapSubmit = (data: z.infer<typeof unwrapFormSchema>) => {
    console.log(data)
  }

  return (
    <Tabs defaultValue="wrap" className="max-w-xl">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger
          onClick={(e) => {
            setWrap(true)
          }}
          className="space-x-2 "
          value="wrap"
        >
          <span>Wrap</span>
        </TabsTrigger>
        <TabsTrigger
          onClick={(e) => {
            setWrap(false)
          }}
          className="space-x-2"
          value="unwrap"
        >
          <span>Unwrap</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="wrap">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl">Wrap (Mint)</CardTitle>
            <CardDescription className="text-center">
              Wrap (Mint) AIPG into wAIPG
            </CardDescription>
          </CardHeader>
          <Form {...wrapForm}>
            <form
              onSubmit={wrapForm.handleSubmit(wrapSubmit)}
              className="space-y-4"
            >
              <CardContent className="space-y-4">
                {wrapformInputs.map((inputs, i) => (
                  <FormField
                    key={i}
                    control={wrapForm.control}
                    name={inputs.id as any}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{inputs.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={inputs.placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </CardContent>
              <CardFooter className="justify-center">
                <Button type="submit">Wrap AIPG</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </TabsContent>
      <TabsContent value="unwrap" id="powergrid">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl">Unwrap (Burn)</CardTitle>
            <CardDescription className="text-center">
              Unwrap (Burn) wAIPG into AIPG
            </CardDescription>
          </CardHeader>

          <Form {...unwrapForm}>
            <form onSubmit={unwrapForm.handleSubmit(unwrapSubmit)} className="">
              <CardContent className="space-y-4 ">
                <div className="space-y-4 divide-y">
                  {unwrapformInputs.map((inputs, i) => (
                    <FormField
                      key={i}
                      control={unwrapForm.control}
                      name={inputs.id as any}
                      render={({ field }) => (
                        <FormItem className="py-2">
                          <FormLabel>{inputs.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={inputs.placeholder}
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <Alert variant="warning" className="items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 translate-y-2" />
                  <AlertTitle className="font-bold">Warning</AlertTitle>
                  <AlertDescription>
                    This step can be a bit tricky, so read carefully!
                  </AlertDescription>
                </Alert>
                <fieldset className="grid gap-6 rounded-lg mt-2 border p-4">
                  <legend className="-ml-1 px-1 text-sm text-muted-foreground font-medium">
                    Follow steps
                  </legend>
                  {postSteps.map((inputs, i) => (
                    <FormField
                      key={i + unwrapformInputs.length}
                      control={unwrapForm.control}
                      name={inputs.id as any}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{inputs.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={inputs.placeholder}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </fieldset>
              </CardContent>
              <CardFooter className="justify-center">
                <Button>Unwrap AIPG</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
