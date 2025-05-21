"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  Download,
  Filter,
  MoreHorizontal,
  RefreshCw,
  Save,
  Search,
  Settings,
  SlidersHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ScreenerView() {
  const [activeTab, setActiveTab] = useState("stocks")

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold">Stock Screener</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Screener Filters</SheetTitle>
                <SheetDescription>Customize your screening criteria to find the perfect stocks.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Market Cap</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">$100M</span>
                      <span className="text-xs text-muted-foreground">$2T</span>
                    </div>
                    <Slider defaultValue={[20, 80]} max={100} step={1} />
                    <div className="flex items-center justify-between">
                      <Input type="number" placeholder="Min" className="h-8 w-24" />
                      <span className="text-center text-sm text-muted-foreground">to</span>
                      <Input type="number" placeholder="Max" className="h-8 w-24" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Price</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">$0</span>
                      <span className="text-xs text-muted-foreground">$1000</span>
                    </div>
                    <Slider defaultValue={[10, 90]} max={100} step={1} />
                    <div className="flex items-center justify-between">
                      <Input type="number" placeholder="Min" className="h-8 w-24" />
                      <span className="text-center text-sm text-muted-foreground">to</span>
                      <Input type="number" placeholder="Max" className="h-8 w-24" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">P/E Ratio</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">0</span>
                      <span className="text-xs text-muted-foreground">100</span>
                    </div>
                    <Slider defaultValue={[0, 50]} max={100} step={1} />
                    <div className="flex items-center justify-between">
                      <Input type="number" placeholder="Min" className="h-8 w-24" />
                      <span className="text-center text-sm text-muted-foreground">to</span>
                      <Input type="number" placeholder="Max" className="h-8 w-24" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Dividend Yield</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">0%</span>
                      <span className="text-xs text-muted-foreground">10%</span>
                    </div>
                    <Slider defaultValue={[0, 5]} max={10} step={0.1} />
                    <div className="flex items-center justify-between">
                      <Input type="number" placeholder="Min" className="h-8 w-24" />
                      <span className="text-center text-sm text-muted-foreground">to</span>
                      <Input type="number" placeholder="Max" className="h-8 w-24" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Technical Indicators</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="rsi-oversold" className="text-sm">
                        RSI Oversold (&lt; 30)
                      </Label>
                      <Switch id="rsi-oversold" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="rsi-overbought" className="text-sm">
                        RSI Overbought (&gt; 70)
                      </Label>
                      <Switch id="rsi-overbought" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="price-above-ma50" className="text-sm">
                        Price Above 50-Day MA
                      </Label>
                      <Switch id="price-above-ma50" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="price-above-ma200" className="text-sm">
                        Price Above 200-Day MA
                      </Label>
                      <Switch id="price-above-ma200" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="golden-cross" className="text-sm">
                        Golden Cross (50 MA &gt; 200 MA)
                      </Label>
                      <Switch id="golden-cross" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline">Reset</Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="outline" size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save Screener
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="stocks">Stocks</TabsTrigger>
              <TabsTrigger value="etfs">ETFs</TabsTrigger>
              <TabsTrigger value="forex">Forex</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search results..." className="w-64 pl-8" />
              </div>
              <Select defaultValue="market-cap">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="market-cap">Market Cap</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="change">% Change</SelectItem>
                  <SelectItem value="volume">Volume</SelectItem>
                  <SelectItem value="pe-ratio">P/E Ratio</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <TabsContent value="stocks">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">
                  <div className="flex items-center space-x-2">
                    <span>Stocks</span>
                    <div className="text-xs text-muted-foreground">
                      <Filter className="mr-1 inline-block h-3 w-3" />
                      <span>5 filters applied</span>
                    </div>
                  </div>
                </CardTitle>
                <div className="text-sm text-muted-foreground">Showing 1-50 of 324 results</div>
              </CardHeader>
              <CardContent>
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
                      <TableHead className="text-right">P/E Ratio</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">AAPL</TableCell>
                      <TableCell>Apple Inc</TableCell>
                      <TableCell className="text-right">$182.63</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        2.45
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">1.36%</TableCell>
                      <TableCell className="text-right">48.2M</TableCell>
                      <TableCell className="text-right">$2.85T</TableCell>
                      <TableCell className="text-right">30.25</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">MSFT</TableCell>
                      <TableCell>Microsoft Corporation</TableCell>
                      <TableCell className="text-right">$415.32</TableCell>
                      <TableCell className="text-right text-red-500 flex items-center justify-end">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        1.25
                      </TableCell>
                      <TableCell className="text-right text-red-500">-0.30%</TableCell>
                      <TableCell className="text-right">23.5M</TableCell>
                      <TableCell className="text-right">$3.09T</TableCell>
                      <TableCell className="text-right">37.42</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">GOOGL</TableCell>
                      <TableCell>Alphabet Inc</TableCell>
                      <TableCell className="text-right">$175.98</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        3.21
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">1.86%</TableCell>
                      <TableCell className="text-right">18.2M</TableCell>
                      <TableCell className="text-right">$2.21T</TableCell>
                      <TableCell className="text-right">25.18</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AMZN</TableCell>
                      <TableCell>Amazon.com Inc</TableCell>
                      <TableCell className="text-right">$178.75</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        2.15
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">1.22%</TableCell>
                      <TableCell className="text-right">25.7M</TableCell>
                      <TableCell className="text-right">$1.85T</TableCell>
                      <TableCell className="text-right">60.12</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">TSLA</TableCell>
                      <TableCell>Tesla Inc</TableCell>
                      <TableCell className="text-right">$175.21</TableCell>
                      <TableCell className="text-right text-red-500 flex items-center justify-end">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        4.32
                      </TableCell>
                      <TableCell className="text-right text-red-500">-2.41%</TableCell>
                      <TableCell className="text-right">92.3M</TableCell>
                      <TableCell className="text-right">$557.2B</TableCell>
                      <TableCell className="text-right">47.35</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="etfs">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">
                  <div className="flex items-center space-x-2">
                    <span>ETFs</span>
                    <div className="text-xs text-muted-foreground">
                      <Filter className="mr-1 inline-block h-3 w-3" />
                      <span>3 filters applied</span>
                    </div>
                  </div>
                </CardTitle>
                <div className="text-sm text-muted-foreground">Showing 1-50 of 215 results</div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Last Price</TableHead>
                      <TableHead className="text-right">Change</TableHead>
                      <TableHead className="text-right">% Change</TableHead>
                      <TableHead className="text-right">Volume</TableHead>
                      <TableHead className="text-right">AUM</TableHead>
                      <TableHead className="text-right">Expense Ratio</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">SPY</TableCell>
                      <TableCell>SPDR S&P 500 ETF Trust</TableCell>
                      <TableCell className="text-right">$508.12</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        2.35
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">0.46%</TableCell>
                      <TableCell className="text-right">65.3M</TableCell>
                      <TableCell className="text-right">$425.7B</TableCell>
                      <TableCell className="text-right">0.09%</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">QQQ</TableCell>
                      <TableCell>Invesco QQQ Trust</TableCell>
                      <TableCell className="text-right">$438.75</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        3.25
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">0.75%</TableCell>
                      <TableCell className="text-right">32.1M</TableCell>
                      <TableCell className="text-right">$215.3B</TableCell>
                      <TableCell className="text-right">0.20%</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">VTI</TableCell>
                      <TableCell>Vanguard Total Stock Market ETF</TableCell>
                      <TableCell className="text-right">$252.18</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        1.15
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">0.46%</TableCell>
                      <TableCell className="text-right">3.2M</TableCell>
                      <TableCell className="text-right">$352.6B</TableCell>
                      <TableCell className="text-right">0.03%</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="forex">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">
                  <div className="flex items-center space-x-2">
                    <span>Forex</span>
                    <div className="text-xs text-muted-foreground">
                      <Filter className="mr-1 inline-block h-3 w-3" />
                      <span>2 filters applied</span>
                    </div>
                  </div>
                </CardTitle>
                <div className="text-sm text-muted-foreground">Showing 1-50 of 105 results</div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Last Price</TableHead>
                      <TableHead className="text-right">Change</TableHead>
                      <TableHead className="text-right">% Change</TableHead>
                      <TableHead className="text-right">Daily Range</TableHead>
                      <TableHead className="text-right">52-Week Range</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">EURUSD</TableCell>
                      <TableCell>EUR/USD</TableCell>
                      <TableCell className="text-right">1.0842</TableCell>
                      <TableCell className="text-right text-red-500 flex items-center justify-end">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        0.0015
                      </TableCell>
                      <TableCell className="text-right text-red-500">-0.14%</TableCell>
                      <TableCell className="text-right">1.0825 - 1.0865</TableCell>
                      <TableCell className="text-right">1.0448 - 1.1139</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">GBPUSD</TableCell>
                      <TableCell>GBP/USD</TableCell>
                      <TableCell className="text-right">1.2685</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        0.0025
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">0.20%</TableCell>
                      <TableCell className="text-right">1.2650 - 1.2695</TableCell>
                      <TableCell className="text-right">1.2038 - 1.3142</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">USDJPY</TableCell>
                      <TableCell>USD/JPY</TableCell>
                      <TableCell className="text-right">156.75</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        0.32
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">0.20%</TableCell>
                      <TableCell className="text-right">156.25 - 157.05</TableCell>
                      <TableCell className="text-right">127.22 - 160.32</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="crypto">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">
                  <div className="flex items-center space-x-2">
                    <span>Cryptocurrencies</span>
                    <div className="text-xs text-muted-foreground">
                      <Filter className="mr-1 inline-block h-3 w-3" />
                      <span>4 filters applied</span>
                    </div>
                  </div>
                </CardTitle>
                <div className="text-sm text-muted-foreground">Showing 1-50 of 150 results</div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Last Price</TableHead>
                      <TableHead className="text-right">Change</TableHead>
                      <TableHead className="text-right">% Change</TableHead>
                      <TableHead className="text-right">Volume (24h)</TableHead>
                      <TableHead className="text-right">Market Cap</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">BTCUSD</TableCell>
                      <TableCell>Bitcoin / USD</TableCell>
                      <TableCell className="text-right">$67,432.15</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        1245.32
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">1.88%</TableCell>
                      <TableCell className="text-right">$32.5B</TableCell>
                      <TableCell className="text-right">$1.32T</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ETHUSD</TableCell>
                      <TableCell>Ethereum / USD</TableCell>
                      <TableCell className="text-right">$3,542.78</TableCell>
                      <TableCell className="text-right text-emerald-500 flex items-center justify-end">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        65.32
                      </TableCell>
                      <TableCell className="text-right text-emerald-500">1.88%</TableCell>
                      <TableCell className="text-right">$15.7B</TableCell>
                      <TableCell className="text-right">$425.6B</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">SOLUSD</TableCell>
                      <TableCell>Solana / USD</TableCell>
                      <TableCell className="text-right">$142.65</TableCell>
                      <TableCell className="text-right text-red-500 flex items-center justify-end">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        3.25
                      </TableCell>
                      <TableCell className="text-right text-red-500">-2.23%</TableCell>
                      <TableCell className="text-right">$4.2B</TableCell>
                      <TableCell className="text-right">$62.8B</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
