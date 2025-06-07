
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, Users, Plus, CheckCircle } from "lucide-react";
import { useState } from "react";

const trendingTopics = [
  { topic: "#TechInnovation", posts: "12.5k posts", growth: "+15%" },
  { topic: "#RemoteWork", posts: "8.2k posts", growth: "+8%" },
  { topic: "#StartupLife", posts: "6.7k posts", growth: "+12%" },
  { topic: "#WebDevelopment", posts: "15.3k posts", growth: "+20%" },
  { topic: "#DesignThinking", posts: "4.1k posts", growth: "+5%" },
];

const suggestedConnections = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Senior Developer at TechCorp",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    mutualConnections: 12,
  },
  {
    id: 2,
    name: "Jessica Park",
    title: "UX Designer at DesignStudio",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
    mutualConnections: 8,
  },
  {
    id: 3,
    name: "David Wilson",
    title: "Product Manager at InnovateCo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    mutualConnections: 15,
  },
];

export function RightSidebar() {
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);

  const handleFollow = (userId: number) => {
    setFollowedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="w-80 p-6 space-y-6">
      {/* Trending Topics */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300 animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((trend, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between py-2 hover:bg-slate-50 rounded-lg px-2 cursor-pointer transition-all duration-200 hover:scale-105 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex-1">
                <p className="font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  {trend.topic}
                </p>
                <p className="text-sm text-slate-500">{trend.posts}</p>
              </div>
              <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                {trend.growth}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300 animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5 text-green-500" />
            People to Follow
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedConnections.map((person, index) => (
            <div 
              key={person.id} 
              className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-all duration-200 group"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <Avatar className="w-10 h-10 ring-2 ring-transparent group-hover:ring-blue-200 transition-all duration-300">
                <AvatarImage src={person.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  {person.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                  {person.name}
                </p>
                <p className="text-xs text-slate-600 truncate">{person.title}</p>
                <p className="text-xs text-slate-500">{person.mutualConnections} mutual connections</p>
              </div>
              <Button 
                size="sm" 
                variant={followedUsers.includes(person.id) ? "default" : "outline"}
                onClick={() => handleFollow(person.id)}
                className={`transition-all duration-300 rounded-full ${
                  followedUsers.includes(person.id)
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'text-blue-600 border-blue-200 hover:bg-blue-50'
                }`}
              >
                {followedUsers.includes(person.id) ? (
                  <CheckCircle className="w-3 h-3" />
                ) : (
                  <Plus className="w-3 h-3" />
                )}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 animate-fade-in">
        <CardContent className="p-6 text-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200 cursor-pointer group">
              <p className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform">247</p>
              <p className="text-sm text-slate-600">Connections</p>
            </div>
            <div className="p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200 cursor-pointer group">
              <p className="text-2xl font-bold text-purple-600 group-hover:scale-110 transition-transform">1.2k</p>
              <p className="text-sm text-slate-600">Profile Views</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200 cursor-pointer">
            <p className="text-lg font-bold text-green-600">85%</p>
            <p className="text-xs text-slate-600">Profile Completion</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
