import StartPost from "../Components/StartPost.jsx";
import Post01 from "../Components/01_PostCard.jsx";
import Post02 from "../Components/02_CommentSection.jsx";
import Post03 from "../Components/03_PostFeed.jsx";

export default function Home() {
  return (
    <div className="space-y-4">
      {/* Start Post */}
      <StartPost />

      {/* Posts Feed */}
      <Post01 />
      <Post02 />
      <Post03 />
    </div>
  );
}
