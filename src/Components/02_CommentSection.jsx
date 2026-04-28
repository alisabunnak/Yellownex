// CommentSection.jsx
// import Data from "../mockData.js/Data";
// import PostFeed from "./03_PostFeed";

import { useState } from "react";

const CommentSection = ({ postId, comments }) => {
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments);

  const handleSubmit = (e) => {
    if (e.key === "Enter" && newComment.trim()) {
      setCommentList([
        ...commentList,
        { id: Date.now(), author: "Me", text: newComment, time: "เมื่อกี้" },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input-row">
        <div className="avatar-sm">Me</div>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleSubmit}
          placeholder="เพิ่มความคิดเห็น..."
          className="comment-input"
        />
      </div>
      {commentList.map((c) => (
        <div key={c.id} className="comment">
          <div className="avatar-sm">{c.author[0]}</div>
          <div className="comment-bubble">
            <strong>{c.author}</strong>
            <p>{c.text}</p>
            <span className="comment-time">{c.time} · ถูกใจ · ตอบกลับ</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CommentSection;
