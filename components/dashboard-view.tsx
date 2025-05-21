"use client"

import { useState } from "react"
import { ArrowUp, ChevronDown, Clock, LineChart, MoreHorizontal, Plus, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarketOverview } from "@/components/market-overview"
import { MainChart } from "@/components/main-chart"
import { MarketNews } from "@/components/market-news"
import { TopMovers } from "@/components/top-movers"
import { WatchlistTable } from "@/components/watchlist-table"

export function DashboardView() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <LineChart className="mr-2 h-4 w-4" />
            AAPL
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <div className="text-sm text-muted-foreground">
            <Clock className="mr-1 inline-block h-3 w-3" />
            <span>Real-time</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid flex-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-3">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-normal">Apple Inc (AAPL)</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium">$182.63</div>
                <div className="flex items-center text-xs font-medium text-emerald-500">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  2.45 (1.36%)
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <MainChart />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Overview</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <MarketOverview />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Movers</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <TopMovers />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="border-t p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-4">
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
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Latest News</CardTitle>
                </CardHeader>
                <CardContent>
                  <MarketNews limit={3} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="watchlist" className="pt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Default Watchlist</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Symbol
                </Button>
              </CardHeader>
              <CardContent>
                <WatchlistTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="news" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Market News</CardTitle>
                <CardDescription>Latest financial news and updates</CardDescription>
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
