// PostCard.jsx
import { useState } from "react";
import CommentSection from "./02_CommentSection"

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [showComments, setShowComments] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const isLong = post.content.length > 200;
  const displayContent =
    !expanded && isLong ? post.content.slice(0, 200) + "..." : post.content;

  return (
    <div className="post-card">
      {/* Header */}
      <div className="post-header">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="avatar"
        />
        <div className="post-meta">
          <h3 className="author-name">{post.author.name}</h3>
          <p className="author-headline">{post.author.headline}</p>
          <span className="post-time">{post.createdAt} · 🌐</span>
        </div>
        <button className="more-btn">···</button>
      </div>

      {/* Body */}
      <div className="post-body">
        <p>{displayContent}</p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="see-more-btn"
          >
            {expanded ? "ย่อ" : "ดูเพิ่มเติม"}
          </button>
        )}
      </div>

      {/* Image (optional) */}
      {post.image && <img src={post.image} alt="post" className="post-image" />}

      {/* Reaction Summary */}
      <div className="reaction-summary">
        <div className="reaction-icons">
          <span>👍 ❤️ 🎉</span>
          <span>{likeCount}</span>
        </div>
        <button onClick={() => setShowComments(!showComments)}>
          {post.commentCount} ความคิดเห็น
        </button>
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <button onClick={handleLike} className={liked ? "btn liked" : "btn"}>
          👍 ถูกใจ
        </button>
        <button onClick={() => setShowComments(!showComments)} className="btn">
          💬 แสดงความคิดเห็น
        </button>
        <button className="btn">🔁 แชร์</button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <CommentSection postId={post.id} comments={post.comments} />
      )}
    </div>
  );
};
export default PostCard;
