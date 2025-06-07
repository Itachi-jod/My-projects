
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Smile, Send, X } from "lucide-react";
import { PostCard } from "./PostCard";
import { useState } from "react";

const initialPosts = [
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
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      author: "John Doe",
      handle: "@johndoe",
      time: "now",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: newPost,
      image: selectedImage,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setPosts([post, ...posts]);
    setNewPost("");
    setSelectedImage(null);
    setIsCreating(false);
  };

  const handleLike = (id: number) => {
    console.log(`Liked post ${id}`);
  };

  const handleComment = (id: number) => {
    console.log(`Commented on post ${id}`);
  };

  const handleShare = (id: number) => {
    console.log(`Shared post ${id}`);
  };

  const handleImageUpload = () => {
    // Simulate image upload with a random placeholder
    const images = [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    ];
    setSelectedImage(images[Math.floor(Math.random() * images.length)]);
  };

  return (
    <div className="flex-1 max-w-2xl mx-auto p-6">
      {/* Create Post */}
      <Card className="mb-6 border-0 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300 animate-fade-in">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Avatar className="w-12 h-12 ring-2 ring-transparent hover:ring-blue-200 transition-all duration-300">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              {!isCreating ? (
                <Input 
                  placeholder="What's on your mind?" 
                  className="border-0 bg-slate-50 text-lg p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer"
                  onClick={() => setIsCreating(true)}
                />
              ) : (
                <div className="space-y-4">
                  <Textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's on your mind?"
                    className="border-0 bg-slate-50 text-lg p-4 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-h-24 resize-none"
                    autoFocus
                  />
                  
                  {selectedImage && (
                    <div className="relative rounded-xl overflow-hidden animate-scale-in">
                      <img src={selectedImage} alt="Selected" className="w-full h-48 object-cover" />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleImageUpload}
                    className="text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <Image className="w-4 h-4 mr-2" />
                    Photo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <Smile className="w-4 h-4 mr-2" />
                    Feeling
                  </Button>
                </div>
                
                {isCreating && (
                  <div className="flex gap-2 animate-fade-in">
                    <Button 
                      variant="ghost"
                      onClick={() => {
                        setIsCreating(false);
                        setNewPost("");
                        setSelectedImage(null);
                      }}
                      className="rounded-xl"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleCreatePost}
                      disabled={!newPost.trim()}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                )}
                
                {!isCreating && (
                  <Button 
                    onClick={() => setIsCreating(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 transition-all duration-200 hover:scale-105"
                  >
                    Share
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div
            key={post.id}
            style={{ animationDelay: `${index * 100}ms` }}
            className="animate-fade-in"
          >
            <PostCard 
              post={post} 
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
