import { ChartView } from "@/components/chart-view"

export default function ChartPage({ params }: { params: { symbol: string } }) {
  return (
    <div className="h-full">
      <ChartView symbol={params.symbol} />
    </div>
  )
}
