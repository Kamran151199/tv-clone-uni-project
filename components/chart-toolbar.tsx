"use client"

import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  CircleDot,
  Crosshair,
  Eraser,
  Pencil,
  Ruler,
  Share2,
  Square,
  SquareArrowDown,
  SquareArrowUp,
  Text,
  Trash2,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ChartToolbar() {
  return (
    <div className="flex items-center justify-between border-b border-t px-4 py-1">
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Crosshair className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Text className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <CircleDot className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Square className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Ruler className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8">
              Fibonacci
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Fibonacci Retracement</DropdownMenuItem>
            <DropdownMenuItem>Fibonacci Extension</DropdownMenuItem>
            <DropdownMenuItem>Fibonacci Fan</DropdownMenuItem>
            <DropdownMenuItem>Fibonacci Arc</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8">
              Patterns
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Head and Shoulders</DropdownMenuItem>
            <DropdownMenuItem>Double Top</DropdownMenuItem>
            <DropdownMenuItem>Double Bottom</DropdownMenuItem>
            <DropdownMenuItem>Triangle</DropdownMenuItem>
            <DropdownMenuItem>Rectangle</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <SquareArrowUp className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <SquareArrowDown className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Eraser className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Trash2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
