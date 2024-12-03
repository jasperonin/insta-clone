import { Home, MessageSquareText , Search, Settings, Compass, Video } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Explore",
    url: "#",
    icon: Compass,
  },
  {
    title: "Reels",
    url: "#",
    icon: Video,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Messages",
    url: "#",
    icon: MessageSquareText,
  },
]

export function AppSidebar() {
  return (
  
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl my-6 text-black">Instant Gram</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-10 text-4xl">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="flex items-center">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="w-4 h-4"/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
