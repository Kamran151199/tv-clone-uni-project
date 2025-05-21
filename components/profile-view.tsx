"use client"

import { useState } from "react"
import { Bell, CreditCard, Download, Lock, LogOut, PenSquare, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProfileView() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold">Profile & Settings</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button variant="outline" size="sm" className="text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4 md:grid-cols-[240px_1fr]">
          <div className="space-y-4">
            <Card>
              <CardHeader className="p-4">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 text-center">
                    <h2 className="text-lg font-semibold">John Doe</h2>
                    <p className="text-sm text-muted-foreground">Premium Member</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="grid gap-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <PenSquare className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <nav className="grid gap-2">
                  <Button
                    variant={activeTab === "account" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("account")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Button>
                  <Button
                    variant={activeTab === "appearance" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("appearance")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Appearance
                  </Button>
                  <Button
                    variant={activeTab === "notifications" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button
                    variant={activeTab === "security" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("security")}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                  <Button
                    variant={activeTab === "billing" ? "secondary" : "ghost"}
                    className="justify-start"
                    onClick={() => setActiveTab("billing")}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Tabs value={activeTab}>
              <TabsContent value="account" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Update your account information and email settings.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue="I'm a trader and investor with 5 years of experience in the stock market."
                      />
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="ja">Japanese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="utc-8">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc-12">UTC-12:00</SelectItem>
                          <SelectItem value="utc-11">UTC-11:00</SelectItem>
                          <SelectItem value="utc-10">UTC-10:00</SelectItem>
                          <SelectItem value="utc-9">UTC-09:00</SelectItem>
                          <SelectItem value="utc-8">UTC-08:00 (PST)</SelectItem>
                          <SelectItem value="utc-7">UTC-07:00 (MST)</SelectItem>
                          <SelectItem value="utc-6">UTC-06:00 (CST)</SelectItem>
                          <SelectItem value="utc-5">UTC-05:00 (EST)</SelectItem>
                          <SelectItem value="utc-4">UTC-04:00</SelectItem>
                          <SelectItem value="utc-3">UTC-03:00</SelectItem>
                          <SelectItem value="utc-2">UTC-02:00</SelectItem>
                          <SelectItem value="utc-1">UTC-01:00</SelectItem>
                          <SelectItem value="utc">UTC+00:00</SelectItem>
                          <SelectItem value="utc+1">UTC+01:00</SelectItem>
                          <SelectItem value="utc+2">UTC+02:00</SelectItem>
                          <SelectItem value="utc+3">UTC+03:00</SelectItem>
                          <SelectItem value="utc+4">UTC+04:00</SelectItem>
                          <SelectItem value="utc+5">UTC+05:00</SelectItem>
                          <SelectItem value="utc+5:30">UTC+05:30</SelectItem>
                          <SelectItem value="utc+6">UTC+06:00</SelectItem>
                          <SelectItem value="utc+7">UTC+07:00</SelectItem>
                          <SelectItem value="utc+8">UTC+08:00</SelectItem>
                          <SelectItem value="utc+9">UTC+09:00</SelectItem>
                          <SelectItem value="utc+10">UTC+10:00</SelectItem>
                          <SelectItem value="utc+11">UTC+11:00</SelectItem>
                          <SelectItem value="utc+12">UTC+12:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="appearance" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>Customize the appearance of the application.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select defaultValue="dark">
                        <SelectTrigger id="theme">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="chart-type">Default Chart Type</Label>
                      <Select defaultValue="candle">
                        <SelectTrigger id="chart-type">
                          <SelectValue placeholder="Select chart type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="candle">Candlestick</SelectItem>
                          <SelectItem value="line">Line</SelectItem>
                          <SelectItem value="bar">Bar</SelectItem>
                          <SelectItem value="area">Area</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeframe">Default Timeframe</Label>
                      <Select defaultValue="1D">
                        <SelectTrigger id="timeframe">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1m">1 minute</SelectItem>
                          <SelectItem value="5m">5 minutes</SelectItem>
                          <SelectItem value="15m">15 minutes</SelectItem>
                          <SelectItem value="30m">30 minutes</SelectItem>
                          <SelectItem value="1h">1 hour</SelectItem>
                          <SelectItem value="4h">4 hours</SelectItem>
                          <SelectItem value="1D">1 day</SelectItem>
                          <SelectItem value="1W">1 week</SelectItem>
                          <SelectItem value="1M">1 month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="compact-view">Compact View</Label>
                        <p className="text-sm text-muted-foreground">Use a more compact view for charts and tables</p>
                      </div>
                      <Switch id="compact-view" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="grid-lines">Show Grid Lines</Label>
                        <p className="text-sm text-muted-foreground">Display grid lines on charts</p>
                      </div>
                      <Switch id="grid-lines" defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Configure how you receive notifications.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h3 className="text-sm font-medium">Email Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-price-alerts" className="flex-1">
                          Price Alerts
                        </Label>
                        <Switch id="email-price-alerts" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-news" className="flex-1">
                          News & Announcements
                        </Label>
                        <Switch id="email-news" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-account" className="flex-1">
                          Account Updates
                        </Label>
                        <Switch id="email-account" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-marketing" className="flex-1">
                          Marketing & Promotions
                        </Label>
                        <Switch id="email-marketing" />
                      </div>
                    </div>
                    <Separator />
                    <h3 className="text-sm font-medium">Push Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="push-price-alerts" className="flex-1">
                          Price Alerts
                        </Label>
                        <Switch id="push-price-alerts" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="push-news" className="flex-1">
                          News & Announcements
                        </Label>
                        <Switch id="push-news" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="push-account" className="flex-1">
                          Account Updates
                        </Label>
                        <Switch id="push-account" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="push-marketing" className="flex-1">
                          Marketing & Promotions
                        </Label>
                        <Switch id="push-marketing" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="security" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your security settings and devices.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                    <Separator />
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Active Sessions</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">Chrome on Windows</p>
                            <p className="text-xs text-muted-foreground">192.168.1.4 • Current session</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Current
                          </Button>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="space-y-0.5">
                            <p className="text-sm font-medium">Safari on iPhone</p>
                            <p className="text-xs text-muted-foreground">86.145.23.12 • 2 days ago</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-red-500">
                            Sign Out
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Update Password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="billing" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing</CardTitle>
                    <CardDescription>Manage your subscription and billing information.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Premium Plan</p>
                          <p className="text-sm text-muted-foreground">$19.99/month • Renews on June 15, 2023</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Change Plan
                        </Button>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Payment Method</h3>
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-5 w-5" />
                          <div>
                            <p className="text-sm font-medium">Visa ending in 4242</p>
                            <p className="text-xs text-muted-foreground">Expires 04/2025</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Billing History</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <p className="text-sm font-medium">Premium Plan - May 2023</p>
                            <p className="text-xs text-muted-foreground">May 15, 2023</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium">$19.99</p>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <p className="text-sm font-medium">Premium Plan - April 2023</p>
                            <p className="text-xs text-muted-foreground">April 15, 2023</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium">$19.99</p>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <p className="text-sm font-medium">Premium Plan - March 2023</p>
                            <p className="text-xs text-muted-foreground">March 15, 2023</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium">$19.99</p>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="text-red-500">
                      Cancel Subscription
                    </Button>
                    <Button>Update Billing</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
