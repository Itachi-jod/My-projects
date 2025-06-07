
import { Home, Users, Bookmark, Bell, MessageCircle, Settings, TrendingUp, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const menuItems = [
  { title: "Home", url: "#", icon: Home, badge: null },
  { title: "Network", url: "#", icon: Users, badge: "12" },
  { title: "Messages", url: "#", icon: MessageCircle, badge: "3" },
  { title: "Notifications", url: "#", icon: Bell, badge: "7" },
  { title: "Bookmarks", url: "#", icon: Bookmark, badge: null },
  { title: "Trending", url: "#", icon: TrendingUp, badge: null },
];

const bottomItems = [
  { title: "Profile", url: "#", icon: User },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <Sidebar className="border-r border-slate-200/60 bg-white/70 backdrop-blur-sm">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <span className="text-white font-bold text-sm">GGS</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-200">
            gather·grow·share
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title} style={{ animationDelay: `${index * 50}ms` }}>
                  <SidebarMenuButton 
                    asChild 
                    className={`transition-all duration-300 rounded-xl group relative overflow-hidden ${
                      activeItem === item.title 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200' 
                        : 'hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    <a 
                      href={item.url} 
                      className="flex items-center gap-3 p-3 relative"
                      onClick={() => setActiveItem(item.title)}
                    >
                      <item.icon className={`w-5 h-5 transition-all duration-200 ${
                        activeItem === item.title ? 'scale-110' : 'group-hover:scale-110'
                      }`} />
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-5 h-5 flex items-center justify-center animate-pulse">
                          {item.badge}
                        </span>
                      )}
                      {activeItem === item.title && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {bottomItems.map((item, index) => (
                <SidebarMenuItem key={item.title} style={{ animationDelay: `${(menuItems.length + index) * 50}ms` }}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-slate-100 transition-all duration-300 rounded-xl group"
                  >
                    <a href={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 ring-2 ring-transparent group-hover:ring-blue-200 transition-all duration-300">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">John Doe</p>
              <p className="text-xs text-slate-600 truncate">john@example.com</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
