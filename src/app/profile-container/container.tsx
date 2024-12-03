import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const post = {
  id: "123456789",
  user: {
    name: "Leo Albit",
    username: "tooezforjasper",
    profile_picture_url: "https://example.com/profile.jpg",
  },
  engagement: {
    likes: 1200,
    comments: [
      {
        id: "comment1",
        username: "travel_fanatic",
        comment: "This view is stunning! 😍",
        timestamp: "2024-12-03T12:00:00Z",
      },
      {
        id: "comment2",
        username: "hiker123",
        comment: "Where is this taken?",
        timestamp: "2024-12-03T12:05:00Z",
      },
    ],
    shares: 15,
    saves: 30,
  },
};

export function ProfileContainer() {
  return (
    
    <div className="container ml-80 mt-10">
        
      <div className="grid grid-cols-4 gap-x-2 items-center">
        <div className="ml-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-gray-500 rounded-full">
          
        </div>
        <div className="mt-5 flex space-x-5">
          <p>{post.user.username}</p>
          <div className="flex mx-10 space-x-2">
            <Button variant="secondary" className="h-8">
              Edit Profile
            </Button>
            <Button variant="secondary" className="h-8">
              Another Button
            </Button>
          </div>
        </div>
      </div>
      <div className="container ml-80">
        <div className="grid grid-cols-4 gap-x-10 items-center">
          <div className="flex space-x-5">
            <p className="text-neutral-800">{post.engagement.likes} posts</p>
            <p className="text-neutral-800">
              {post.engagement.shares} followers
            </p>
            <p className="text-neutral-800">
              {post.engagement.saves} following
            </p>
          </div>
        </div>
      </div>
      <div className="container ml-80 mt-6">
        <div className="grid grid-cols-4 gap-x-10 items-center">
          <div className="flex space-x-5">
            <p className="text-neutral-800 font-bold">{post.user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
