"use client"

import { ArrowDown, ArrowUp } from "lucide-react"

export function MarketOverview() {
  // Mock data for market indices
  const indices = [
    {
      name: "S&P 500",
      value: "5,218.24",
      change: "+0.58%",
      direction: "up",
    },
    {
      name: "Nasdaq",
      value: "16,742.39",
      change: "+0.81%",
      direction: "up",
    },
    {
      name: "Dow Jones",
      value: "38,612.24",
      change: "-0.15%",
      direction: "down",
    },
    {
      name: "Russell 2000",
      value: "2,015.63",
      change: "+0.42%",
      direction: "up",
    },
    {
      name: "VIX",
      value: "14.32",
      change: "-3.24%",
      direction: "down",
    },
  ]

  return (
    <div className="space-y-2">
      {indices.map((index) => (
        <div key={index.name} className="flex items-center justify-between">
          <span className="text-sm font-medium">{index.name}</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm">{index.value}</span>
            <span
              className={`flex items-center text-xs ${index.direction === "up" ? "text-emerald-500" : "text-red-500"}`}
            >
              {index.direction === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
              {index.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
