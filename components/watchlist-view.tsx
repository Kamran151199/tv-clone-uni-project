"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  Download,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Trash2,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WatchlistTable } from "@/components/watchlist-table"

export function WatchlistView() {
  const [activeTab, setActiveTab] = useState("default")

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold">Watchlists</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Watchlist
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
              <TabsTrigger value="default">Default</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="crypto">Crypto</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search symbols..." className="w-64 pl-8" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Symbol
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Upload className="mr-2 h-4 w-4" />
                    Import Watchlist
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    Export Watchlist
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Watchlist
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <TabsContent value="default">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">Default Watchlist</CardTitle>
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
          <TabsContent value="favorites">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-normal">Favorites</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Symbol
                </Button>
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
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
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
                <CardTitle className="text-base font-normal">Crypto Watchlist</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Symbol
                </Button>
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
                      <TableCell className="text-right">32.5B</TableCell>
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
                      <TableCell className="text-right">15.7B</TableCell>
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
                      <TableCell className="text-right">4.2B</TableCell>
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
