
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Image, Smile } from "lucide-react";
import { PostCard } from "./PostCard";

const posts = [
  {
    id: 1,
    author: "Sarah Johnson",
    handle: "@sarahjohnson",
    time: "2h",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "Just shipped a new feature that I'm really excited about! The team collaboration on this project has been incredible. Sometimes the best ideas come from the most unexpected conversations. 🚀",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: "Michael Chen",
    handle: "@michaelchen",
    time: "4h",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Reflecting on the importance of continuous learning in tech. Every day brings new challenges and opportunities to grow. What's the most valuable skill you've learned recently?",
    likes: 56,
    comments: 12,
    shares: 7,
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    handle: "@emilyrodriguez",
    time: "6h",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Beautiful sunset from today's team retreat. Nothing beats face-to-face collaboration and building those genuine connections. Remote work is great, but these moments are special. ✨",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    likes: 89,
    comments: 15,
    shares: 12,
  },
];

export function MainContent() {
  return (
    <div className="flex-1 max-w-2xl mx-auto p-6">
      {/* Create Post */}
      <Card className="mb-6 border-0 shadow-sm bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Input 
                placeholder="What's on your mind?" 
                className="border-0 bg-slate-50 text-lg p-4 rounded-xl focus:bg-white transition-all duration-200"
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                    <Image className="w-4 h-4 mr-2" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50">
                    <Smile className="w-4 h-4 mr-2" />
                    Feeling
                  </Button>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
