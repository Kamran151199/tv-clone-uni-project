"use client"

import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function WatchlistTable() {
  // Mock data for watchlist
  const stocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc",
      price: "$182.63",
      change: "+2.45",
      changePercent: "+1.36%",
      volume: "48.2M",
      marketCap: "$2.85T",
      direction: "up",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: "$415.32",
      change: "-1.25",
      changePercent: "-0.30%",
      volume: "23.5M",
      marketCap: "$3.09T",
      direction: "down",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc",
      price: "$175.98",
      change: "+3.21",
      changePercent: "+1.86%",
      volume: "18.2M",
      marketCap: "$2.21T",
      direction: "up",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc",
      price: "$178.75",
      change: "+2.15",
      changePercent: "+1.22%",
      volume: "25.7M",
      marketCap: "$1.85T",
      direction: "up",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc",
      price: "$175.21",
      change: "-4.32",
      changePercent: "-2.41%",
      volume: "92.3M",
      marketCap: "$557.2B",
      direction: "down",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Last Price</TableHead>
          <TableHead className="text-right">Change</TableHead>
          <TableHead className="text-right">% Change</TableHead>
          <TableHead className="text-right">Volume</TableHead>
          <TableHead className="text-right">Market Cap</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.symbol}>
            <TableCell className="font-medium">{stock.symbol}</TableCell>
            <TableCell>{stock.name}</TableCell>
            <TableCell className="text-right">{stock.price}</TableCell>
            <TableCell className="text-right flex items-center justify-end">
              <span
                className={
                  stock.direction === "up" ? "text-emerald-500 flex items-center" : "text-red-500 flex items-center"
                }
              >
                {stock.direction === "up" ? (
                  <ArrowUp className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3" />
                )}
                {stock.change}
              </span>
            </TableCell>
            <TableCell className={`text-right ${stock.direction === "up" ? "text-emerald-500" : "text-red-500"}`}>
              {stock.changePercent}
            </TableCell>
            <TableCell className="text-right">{stock.volume}</TableCell>
            <TableCell className="text-right">{stock.marketCap}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
