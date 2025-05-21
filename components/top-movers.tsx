"use client"

import { ArrowDown, ArrowUp } from "lucide-react"

export function TopMovers() {
  // Mock data for top movers
  const gainers = [
    {
      symbol: "NVDA",
      name: "NVIDIA Corp",
      price: "$124.32",
      change: "+8.45%",
    },
    {
      symbol: "AMD",
      name: "Advanced Micro Devices",
      price: "$178.75",
      change: "+6.22%",
    },
    {
      symbol: "PLTR",
      name: "Palantir Technologies",
      price: "$24.18",
      change: "+5.87%",
    },
  ]

  const losers = [
    {
      symbol: "META",
      name: "Meta Platforms Inc",
      price: "$472.14",
      change: "-4.32%",
    },
    {
      symbol: "NFLX",
      name: "Netflix Inc",
      price: "$612.32",
      change: "-3.75%",
    },
    {
      symbol: "PYPL",
      name: "PayPal Holdings Inc",
      price: "$62.45",
      change: "-3.21%",
    },
  ]

  return (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-xs font-medium text-muted-foreground">Top Gainers</h3>
        <div className="space-y-2">
          {gainers.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm">{stock.price}</div>
                <div className="flex items-center justify-end text-xs text-emerald-500">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xs font-medium text-muted-foreground">Top Losers</h3>
        <div className="space-y-2">
          {losers.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm">{stock.price}</div>
                <div className="flex items-center justify-end text-xs text-red-500">
                  <ArrowDown className="mr-1 h-3 w-3" />
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
