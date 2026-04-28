import StartPost from "../Components/StartPost.jsx";

import { postsData } from "../data/mockData.js";

import PostFeed from "../Components/03_PostFeed.jsx";

export default function Home() {
  return (
    // CHANGE: Added flex-col and max-w to keep the feed centered and correctly sized
    <div className="flex flex-col gap-4 w-full max-w-[550px] mx-auto">
      <StartPost />

      {/* Posts Feed */}
      {postsData.map((post) => (
        <PostFeed key={post.id} post={post} />
      ))}
      {/* Posts Feed */}
      <PostFeed />
    </div>
  );
}