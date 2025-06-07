
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react";

interface Post {
  id: number;
  author: string;
  handle: string;
  time: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={post.avatar} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">{post.author}</span>
                <span className="text-slate-500">{post.handle}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{post.time}</span>
              </div>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-slate-800 mb-4 leading-relaxed">{post.content}</p>
            
            {post.image && (
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors">
                <Heart className="w-4 h-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-green-500 hover:bg-green-50 transition-colors">
                <Repeat2 className="w-4 h-4 mr-2" />
                {post.shares}
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-purple-500 hover:bg-purple-50 transition-colors">
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
