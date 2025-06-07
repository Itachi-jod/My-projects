
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, Users, Plus } from "lucide-react";

const trendingTopics = [
  { topic: "#TechInnovation", posts: "12.5k posts" },
  { topic: "#RemoteWork", posts: "8.2k posts" },
  { topic: "#StartupLife", posts: "6.7k posts" },
  { topic: "#WebDevelopment", posts: "15.3k posts" },
  { topic: "#DesignThinking", posts: "4.1k posts" },
];

const suggestedConnections = [
  {
    name: "Alex Thompson",
    title: "Senior Developer at TechCorp",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    mutualConnections: 12,
  },
  {
    name: "Jessica Park",
    title: "UX Designer at DesignStudio",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
    mutualConnections: 8,
  },
  {
    name: "David Wilson",
    title: "Product Manager at InnovateCo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    mutualConnections: 15,
  },
];

export function RightSidebar() {
  return (
    <div className="w-80 p-6 space-y-6">
      {/* Trending Topics */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((trend, index) => (
            <div key={index} className="flex items-center justify-between py-2 hover:bg-slate-50 rounded-lg px-2 cursor-pointer transition-colors">
              <div>
                <p className="font-medium text-blue-600">{trend.topic}</p>
                <p className="text-sm text-slate-500">{trend.posts}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5 text-green-500" />
            People to Follow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedConnections.map((person, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={person.avatar} />
                <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-slate-900 truncate">{person.name}</p>
                <p className="text-xs text-slate-600 truncate">{person.title}</p>
                <p className="text-xs text-slate-500">{person.mutualConnections} mutual connections</p>
              </div>
              <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-6 text-center">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold text-blue-600">247</p>
              <p className="text-sm text-slate-600">Connections</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">1.2k</p>
              <p className="text-sm text-slate-600">Profile Views</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
