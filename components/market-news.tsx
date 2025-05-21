"use client"

import { Clock } from "lucide-react"

interface MarketNewsProps {
  limit?: number
}

export function MarketNews({ limit = 5 }: MarketNewsProps) {
  // Mock data for market news
  const news = [
    {
      id: 1,
      title: "Apple announces new AI features for iOS 18",
      source: "TechCrunch",
      time: "2 hours ago",
      url: "#",
    },
    {
      id: 2,
      title: "Fed signals potential rate cut in September meeting",
      source: "CNBC",
      time: "3 hours ago",
      url: "#",
    },
    {
      id: 3,
      title: "Tesla exceeds Q2 delivery expectations, stock surges",
      source: "Bloomberg",
      time: "5 hours ago",
      url: "#",
    },
    {
      id: 4,
      title: "Microsoft's cloud business drives record quarterly revenue",
      source: "Reuters",
      time: "6 hours ago",
      url: "#",
    },
    {
      id: 5,
      title: "Oil prices rise amid Middle East tensions",
      source: "Wall Street Journal",
      time: "8 hours ago",
      url: "#",
    },
    {
      id: 6,
      title: "Amazon announces new logistics centers across Europe",
      source: "Financial Times",
      time: "9 hours ago",
      url: "#",
    },
    {
      id: 7,
      title: "Nvidia unveils next-generation AI chips, partners with major cloud providers",
      source: "TechCrunch",
      time: "10 hours ago",
      url: "#",
    },
    {
      id: 8,
      title: "Bitcoin surpasses $70,000 as institutional adoption increases",
      source: "CoinDesk",
      time: "12 hours ago",
      url: "#",
    },
    {
      id: 9,
      title: "Google's antitrust trial enters final phase, decision expected soon",
      source: "The Verge",
      time: "14 hours ago",
      url: "#",
    },
    {
      id: 10,
      title: "JPMorgan reports strong trading revenue in Q2 earnings",
      source: "CNBC",
      time: "16 hours ago",
      url: "#",
    },
  ]

  // Limit the number of news items
  const limitedNews = news.slice(0, limit)

  return (
    <div className="space-y-4">
      {limitedNews.map((item) => (
        <div key={item.id} className="space-y-1">
          <a href={item.url} className="block text-sm font-medium hover:underline">
            {item.title}
          </a>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>{item.source}</span>
            <span className="mx-1">•</span>
            <Clock className="mr-1 h-3 w-3" />
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
