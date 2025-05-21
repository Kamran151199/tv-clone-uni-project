"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  ChevronDown,
  ChevronRight,
  Clock,
  Cog,
  CreditCard,
  DollarSign,
  Globe,
  Heart,
  LineChart,
  PieChart,
  Plus,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function Sidebar() {
  const pathname = usePathname()
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(true)
  const [isMarketsOpen, setIsMarketsOpen] = useState(true)

  return (
    <div className="hidden border-r bg-background md:block md:w-64">
      <ScrollArea className="h-full py-2">
        <div className="px-3 py-2">
          <div className="mb-2 px-4 text-xs font-semibold tracking-tight text-foreground/70">MAIN</div>
          <div className="space-y-1">
            <Button
              variant={pathname === "/" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/">
                <LineChart className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              variant={pathname === "/screener" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/screener">
                <BarChart3 className="mr-2 h-4 w-4" />
                Stock Screener
              </Link>
            </Button>
            <Button
              variant={pathname === "/economic-calendar" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/economic-calendar">
                <Clock className="mr-2 h-4 w-4" />
                Economic Calendar
              </Link>
            </Button>
            <Button
              variant={pathname === "/earnings-calendar" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/earnings-calendar">
                <DollarSign className="mr-2 h-4 w-4" />
                Earnings Calendar
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <Collapsible open={isWatchlistOpen} onOpenChange={setIsWatchlistOpen} className="space-y-2">
            <CollapsibleTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 text-xs font-semibold tracking-tight text-foreground/70">
                <span>WATCHLISTS</span>
                {isWatchlistOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <Button
                variant={pathname === "/watchlist" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/watchlist">
                  <Star className="mr-2 h-4 w-4" />
                  Default Watchlist
                </Link>
              </Button>
              <Button
                variant={pathname === "/watchlist/favorites" ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href="/watchlist/favorites">
                  <Heart className="mr-2 h-4 w-4" />
                  Favorites
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Create New
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="px-3 py-2">
          <Collapsible open={isMarketsOpen} onOpenChange={setIsMarketsOpen} className="space-y-2">
            <CollapsibleTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between px-4 py-1 text-xs font-semibold tracking-tight text-foreground/70">
                <span>MARKETS</span>
                {isMarketsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/chart/AAPL">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Stocks
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/chart/BTCUSD">
                  <Globe className="mr-2 h-4 w-4" />
                  Crypto
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/chart/EURUSD">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Forex
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link href="/chart/CL">
                  <PieChart className="mr-2 h-4 w-4" />
                  Futures
                </Link>
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="px-3 py-2">
          <div className="mb-2 px-4 text-xs font-semibold tracking-tight text-foreground/70">PERSONAL</div>
          <div className="space-y-1">
            <Button
              variant={pathname === "/profile" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/profile">
                <Cog className="mr-2 h-4 w-4" />
                Profile & Settings
              </Link>
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
