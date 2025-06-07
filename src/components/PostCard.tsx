
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react";
import { useState } from "react";

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
  onLike: (id: number) => void;
  onComment: (id: number) => void;
  onShare: (id: number) => void;
}

export function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(post.id);
  };

  const handleShare = () => {
    setIsShared(!isShared);
    onShare(post.id);
  };

  const handleComment = () => {
    setShowComments(!showComments);
    onComment(post.id);
  };

  return (
    <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.02] animate-fade-in">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Avatar className="w-12 h-12 ring-2 ring-transparent hover:ring-blue-200 transition-all duration-300">
            <AvatarImage src={post.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
              {post.author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.author}
                </span>
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">
                  {post.handle}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{post.time}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all duration-200"
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-slate-800 mb-4 leading-relaxed hover:text-slate-900 transition-colors">
              {post.content}
            </p>
            
            {post.image && (
              <div className="mb-4 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            )}
            
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLike}
                className={`transition-all duration-300 rounded-xl ${
                  isLiked 
                    ? 'text-red-500 bg-red-50 scale-110' 
                    : 'text-slate-500 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className={`w-4 h-4 mr-2 transition-all duration-300 ${isLiked ? 'fill-current' : ''}`} />
                <span className="font-medium">{post.likes + (isLiked ? 1 : 0)}</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleComment}
                className="text-slate-500 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300 rounded-xl"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="font-medium">{post.comments}</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className={`transition-all duration-300 rounded-xl ${
                  isShared 
                    ? 'text-green-500 bg-green-50 scale-110' 
                    : 'text-slate-500 hover:text-green-500 hover:bg-green-50'
                }`}
              >
                <Repeat2 className="w-4 h-4 mr-2" />
                <span className="font-medium">{post.shares + (isShared ? 1 : 0)}</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-slate-500 hover:text-purple-500 hover:bg-purple-50 transition-all duration-300 rounded-xl"
              >
                <Share className="w-4 h-4" />
              </Button>
            </div>

            {showComments && (
              <div className="mt-4 p-4 bg-slate-50 rounded-xl animate-fade-in">
                <div className="text-sm text-slate-600 mb-2">Comments</div>
                <div className="space-y-2">
                  <div className="flex gap-2 items-start">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs bg-blue-100">U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 bg-white p-2 rounded-lg text-sm">
                      Great post! Really inspiring content.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
