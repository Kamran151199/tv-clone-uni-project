"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  ChevronDown,
  Clock,
  CreditCard,
  LineChart,
  MoreHorizontal,
  RefreshCw,
  Save,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainChart } from "@/components/main-chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ChartToolbar } from "@/components/chart-toolbar"
import { MarketNews } from "@/components/market-news"

export function ChartView({ symbol = "AAPL" }: { symbol: string }) {
  const [timeframe, setTimeframe] = useState("1D")
  const [chartType, setChartType] = useState("candle")
  const [activeTab, setActiveTab] = useState("chart")

  // Mock data for the symbol
  const symbolData = {
    AAPL: {
      name: "Apple Inc",
      price: 182.63,
      change: 2.45,
      changePercent: 1.36,
      direction: "up",
    },
    MSFT: {
      name: "Microsoft Corporation",
      price: 415.32,
      change: -1.25,
      changePercent: -0.3,
      direction: "down",
    },
    GOOGL: {
      name: "Alphabet Inc",
      price: 175.98,
      change: 3.21,
      changePercent: 1.86,
      direction: "up",
    },
    BTCUSD: {
      name: "Bitcoin / USD",
      price: 67432.15,
      change: 1245.32,
      changePercent: 1.88,
      direction: "up",
    },
    EURUSD: {
      name: "EUR / USD",
      price: 1.0842,
      change: -0.0015,
      changePercent: -0.14,
      direction: "down",
    },
  }

  // Get data for the current symbol or use default
  const data = symbolData[symbol as keyof typeof symbolData] || symbolData.AAPL

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <CreditCard className="mr-2 h-4 w-4" />
            {symbol}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <div className="text-sm text-muted-foreground">
            <Clock className="mr-1 inline-block h-3 w-3" />
            <span>Real-time</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <div className="flex items-center justify-between border-b px-4">
            <TabsList>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-sm">
                <Button
                  variant={chartType === "line" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setChartType("line")}
                >
                  <LineChart className="h-4 w-4" />
                </Button>
                <Button
                  variant={chartType === "candle" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setChartType("candle")}
                >
                  <BarChart3 className="h-4 w-4" />
                </Button>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-1 text-sm">
                <Button
                  variant={timeframe === "1D" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 px-2"
                  onClick={() => setTimeframe("1D")}
                >
                  1D
                </Button>
                <Button
                  variant={timeframe === "1W" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 px-2"
                  onClick={() => setTimeframe("1W")}
                >
                  1W
                </Button>
                <Button
                  variant={timeframe === "1M" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 px-2"
                  onClick={() => setTimeframe("1M")}
                >
                  1M
                </Button>
                <Button
                  variant={timeframe === "3M" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 px-2"
                  onClick={() => setTimeframe("3M")}
                >
                  3M
                </Button>
                <Button
                  variant={timeframe === "1Y" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 px-2"
                  onClick={() => setTimeframe("1Y")}
                >
                  1Y
                </Button>
                <Button
                  variant={timeframe === "ALL" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-7 px-2"
                  onClick={() => setTimeframe("ALL")}
                >
                  ALL
                </Button>
              </div>
            </div>
          </div>
          <TabsContent value="chart" className="h-[calc(100%-48px)] p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    {data.name} ({symbol})
                  </h2>
                  <div className="flex items-center text-sm">
                    <span className="font-medium">${data.price.toLocaleString()}</span>
                    <span
                      className={`ml-2 flex items-center ${data.direction === "up" ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {data.direction === "up" ? (
                        <ArrowUp className="mr-1 h-3 w-3" />
                      ) : (
                        <ArrowDown className="mr-1 h-3 w-3" />
                      )}
                      {data.change.toLocaleString()} ({data.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Select defaultValue="indicators">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Add Indicator" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ma">Moving Average</SelectItem>
                      <SelectItem value="ema">EMA</SelectItem>
                      <SelectItem value="rsi">RSI</SelectItem>
                      <SelectItem value="macd">MACD</SelectItem>
                      <SelectItem value="bollinger">Bollinger Bands</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="compare">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Compare With" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spy">S&P 500 (SPY)</SelectItem>
                      <SelectItem value="qqq">NASDAQ (QQQ)</SelectItem>
                      <SelectItem value="msft">Microsoft (MSFT)</SelectItem>
                      <SelectItem value="googl">Alphabet (GOOGL)</SelectItem>
                      <SelectItem value="amzn">Amazon (AMZN)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <ChartToolbar />
              <div className="flex-1 p-4">
                <MainChart type={chartType} timeframe={timeframe} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="overview" className="p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Company Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Market Cap</div>
                      <div>$2.85T</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">P/E Ratio</div>
                      <div>30.25</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">EPS</div>
                      <div>$6.04</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Dividend Yield</div>
                      <div>0.51%</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">52-Week Range</div>
                      <div>$124.17 - $199.62</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Average Volume</div>
                      <div>58.32M</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Technical Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">RSI (14)</div>
                      <div>58.24</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">MACD</div>
                      <div>1.25</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">20-Day MA</div>
                      <div>$178.45</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">50-Day MA</div>
                      <div>$175.32</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">200-Day MA</div>
                      <div>$170.18</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Volatility</div>
                      <div>1.45%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Key Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Open</div>
                      <div>$180.07</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">High</div>
                      <div>$183.25</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Low</div>
                      <div>$179.83</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Volume</div>
                      <div>48.2M</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Avg. Volume</div>
                      <div>58.3M</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-muted-foreground">Previous Close</div>
                      <div>$180.18</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="financials" className="p-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Data</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="income">
                  <TabsList className="mb-4">
                    <TabsTrigger value="income">Income Statement</TabsTrigger>
                    <TabsTrigger value="balance">Balance Sheet</TabsTrigger>
                    <TabsTrigger value="cash">Cash Flow</TabsTrigger>
                  </TabsList>
                  <TabsContent value="income">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left font-medium p-2">Item</th>
                            <th className="text-right font-medium p-2">2023</th>
                            <th className="text-right font-medium p-2">2022</th>
                            <th className="text-right font-medium p-2">2021</th>
                            <th className="text-right font-medium p-2">2020</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Revenue</td>
                            <td className="text-right p-2">$394.33B</td>
                            <td className="text-right p-2">$365.82B</td>
                            <td className="text-right p-2">$365.82B</td>
                            <td className="text-right p-2">$274.52B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Cost of Revenue</td>
                            <td className="text-right p-2">$224.11B</td>
                            <td className="text-right p-2">$212.98B</td>
                            <td className="text-right p-2">$212.98B</td>
                            <td className="text-right p-2">$169.56B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Gross Profit</td>
                            <td className="text-right p-2">$170.22B</td>
                            <td className="text-right p-2">$152.84B</td>
                            <td className="text-right p-2">$152.84B</td>
                            <td className="text-right p-2">$104.96B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Operating Expenses</td>
                            <td className="text-right p-2">$54.76B</td>
                            <td className="text-right p-2">$50.83B</td>
                            <td className="text-right p-2">$43.89B</td>
                            <td className="text-right p-2">$38.67B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Operating Income</td>
                            <td className="text-right p-2">$115.46B</td>
                            <td className="text-right p-2">$102.01B</td>
                            <td className="text-right p-2">$108.95B</td>
                            <td className="text-right p-2">$66.29B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Net Income</td>
                            <td className="text-right p-2">$96.99B</td>
                            <td className="text-right p-2">$99.80B</td>
                            <td className="text-right p-2">$94.68B</td>
                            <td className="text-right p-2">$57.41B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">EPS (Diluted)</td>
                            <td className="text-right p-2">$6.14</td>
                            <td className="text-right p-2">$6.11</td>
                            <td className="text-right p-2">$5.61</td>
                            <td className="text-right p-2">$3.28</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="balance">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left font-medium p-2">Item</th>
                            <th className="text-right font-medium p-2">2023</th>
                            <th className="text-right font-medium p-2">2022</th>
                            <th className="text-right font-medium p-2">2021</th>
                            <th className="text-right font-medium p-2">2020</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Total Assets</td>
                            <td className="text-right p-2">$352.76B</td>
                            <td className="text-right p-2">$338.22B</td>
                            <td className="text-right p-2">$351.00B</td>
                            <td className="text-right p-2">$323.89B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Total Liabilities</td>
                            <td className="text-right p-2">$290.40B</td>
                            <td className="text-right p-2">$302.08B</td>
                            <td className="text-right p-2">$287.91B</td>
                            <td className="text-right p-2">$258.55B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Total Equity</td>
                            <td className="text-right p-2">$62.36B</td>
                            <td className="text-right p-2">$36.14B</td>
                            <td className="text-right p-2">$63.09B</td>
                            <td className="text-right p-2">$65.34B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Cash & Equivalents</td>
                            <td className="text-right p-2">$29.97B</td>
                            <td className="text-right p-2">$23.65B</td>
                            <td className="text-right p-2">$34.94B</td>
                            <td className="text-right p-2">$38.02B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Short-term Investments</td>
                            <td className="text-right p-2">$31.58B</td>
                            <td className="text-right p-2">$24.66B</td>
                            <td className="text-right p-2">$27.70B</td>
                            <td className="text-right p-2">$52.93B</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="cash">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left font-medium p-2">Item</th>
                            <th className="text-right font-medium p-2">2023</th>
                            <th className="text-right font-medium p-2">2022</th>
                            <th className="text-right font-medium p-2">2021</th>
                            <th className="text-right font-medium p-2">2020</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Operating Cash Flow</td>
                            <td className="text-right p-2">$113.76B</td>
                            <td className="text-right p-2">$122.15B</td>
                            <td className="text-right p-2">$104.04B</td>
                            <td className="text-right p-2">$80.67B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Capital Expenditure</td>
                            <td className="text-right p-2">-$10.75B</td>
                            <td className="text-right p-2">-$10.71B</td>
                            <td className="text-right p-2">-$11.09B</td>
                            <td className="text-right p-2">-$7.31B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Free Cash Flow</td>
                            <td className="text-right p-2">$103.01B</td>
                            <td className="text-right p-2">$111.44B</td>
                            <td className="text-right p-2">$92.95B</td>
                            <td className="text-right p-2">$73.36B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Dividends Paid</td>
                            <td className="text-right p-2">-$14.80B</td>
                            <td className="text-right p-2">-$14.80B</td>
                            <td className="text-right p-2">-$14.47B</td>
                            <td className="text-right p-2">-$14.08B</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Share Repurchases</td>
                            <td className="text-right p-2">-$77.55B</td>
                            <td className="text-right p-2">-$89.40B</td>
                            <td className="text-right p-2">-$85.97B</td>
                            <td className="text-right p-2">-$72.36B</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="news" className="p-4">
            <Card>
              <CardHeader>
                <CardTitle>Latest News</CardTitle>
              </CardHeader>
              <CardContent>
                <MarketNews limit={10} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
