import Product from "@/components/Product"

export default function DetailedProduct({
  params
}: {
  params: { pid: string }
}) {
  return (
    <div className="w-full min-h-screen p-4 flex justify-center items-center">
      <Product productName={params.pid} />
    </div>
  )
}
