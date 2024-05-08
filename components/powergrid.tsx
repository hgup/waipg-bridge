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
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export default function PowerGridWrapper() {
  const [show, setShow] = React.useState(false)
  const [wrap, setWrap] = React.useState(true)

  if (show)
    return (
      <>
        <div className="flex flex-row max-w-xl gap-2 md:gap-14 justify-center mb-4 items-center">
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
    )
}

const PowerGridMain = ({ setWrap }: { setWrap: Function }) => (
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
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="aipg">AIPG amount to deposit</Label>
            <Input
              type="number"
              id="aipg"
              defaultValue="0"
              placeholder="Amount of AIPG"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="ethaddr"> Ethereum Address</Label>
            <Input
              id="ethaddr"
              defaultValue=""
              placeholder="Your Ethereum Address"
            />
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Wrap AIPG</Button>
        </CardFooter>
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
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="aipg">wAIPG amount to unwrap (burn)</Label>
            <Input
              type="number"
              id="aipg"
              defaultValue="0"
              placeholder="Amount of wAIPG"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="ethaddr"> Ethereum Address</Label>
            <Input
              id="ethaddr"
              defaultValue=""
              placeholder="Your Ethereum Address"
            />
          </div>

          <div className="space-y-1">
            <div className="max-w-[450px]">
              <Label htmlFor="holdingaddr" className="">
                AIPG Holding address that you sent your coins to during the mint
                process
              </Label>
            </div>
            <Input
              id="ethaddr"
              defaultValue=""
              placeholder="AIPG Holding Address"
            />
          </div>

          <div className="space-y-1">
            <div className="max-w-[450px]">
              <Label htmlFor="receivingaddress" className="">
                AIPG Receiving address on your walet that you want to receive
                your coins at during this burn process
              </Label>
            </div>
            <Input
              id="ethaddr"
              defaultValue=""
              placeholder="AIPG Receiving Address"
            />
          </div>

          <Alert variant="warning">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              This step can be a bit tricky, so read carefully!
            </AlertDescription>
          </Alert>

          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm text-muted-foreground font-medium">
              Follow steps
            </legend>
            <div className="space-y-1">
              <div className="max-w-[450px]">
                <Label htmlFor="receivingaddress" className="">
                  Send the amount of wAIPG you specify above, from your user
                  Ethereum address specified above, to the Admin Ethereum
                  Address
                </Label>
              </div>
              <Input
                id="adminaddr"
                defaultValue=""
                placeholder="AIPG Admin Address"
              />
            </div>
            <div className="space-y-1">
              <div className="max-w-[450px]">
                <Label htmlFor="receivingaddress" className="">
                  Once this is done, then input the resulting hexidecimal
                  transaction hash of that transaction between yourself and the
                  admin for the specified amount
                </Label>
              </div>
              <Input
                id="ethaddr"
                defaultValue=""
                placeholder="Transaction Hash of wAIPG from User to Admin"
              />
            </div>
          </fieldset>
        </CardContent>
        <CardFooter className="justify-center">
          <Button>Unwrap AIPG</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
)
