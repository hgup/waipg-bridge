import PowerGrid from "@/components/powergrid"

export default function Dashboard() {
  return (
    <main className="px-4 md:p-0 mb-16 mt-24 ">
      <section className="mx-auto flex flex-col items-center gap-6 pb-5  mt-16 max-w-3xl">
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span className="bg-primary text-primary-foreground font-mono py-2 px-6 rounded-full text-5xl">
              wAIPG/AIPG
            </span>{" "}
            <span>Token Bridge</span>
          </div>
        </h1>
      </section>

      <section className="mx-auto max-w-xl">
        <PowerGrid />
      </section>
    </main>
  )
}
