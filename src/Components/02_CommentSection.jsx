// CommentSection.jsx
// import Data from "../mockData.js/Data";
// import PostFeed from "./03_PostFeed";
// import postsData from "../mockData.js/postsData";
import { useState } from "react";

<<<<<<< HEAD
const CommentSection = ({ comments }) => {
=======


const CommentSection = ({ postId, comments }) => {
>>>>>>> d4673fd (No_config2)
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(comments || []);

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
    <div className="mt-4 border-t border-gray-800 pt-4">
      {/* Input Section */}
      <div className="flex gap-2 mb-4">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
          M
        </div>
        <div className="flex-1">
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleSubmit}
            placeholder="เพิ่มความคิดเห็น..."
            className="w-full bg-[#333333] border border-gray-700 rounded-full px-4 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
          />
        </div>
      </div>

      {/* Comment List */}
      <div className="space-y-3">
        {commentList.map((c) => (
          <div key={c.id} className="flex gap-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 overflow-hidden text-gray-300">
              {typeof c.author === 'string' ? c.author[0] : (c.author?.name ? c.author.name[0] : '?')}
            </div>
            <div className="flex-1">
              <div className="bg-[#2a2a2a] rounded-lg p-2 rounded-tl-none border border-gray-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-gray-200">
                    {typeof c.author === 'string' ? c.author : (c.author?.name || 'Unknown')}
                  </span>
                  <span className="text-[10px] text-gray-500">{c.time}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{c.text}</p>
              </div>
              <div className="flex gap-3 mt-1 ml-1">
                <button className="text-[10px] font-semibold text-gray-500 hover:text-blue-400 transition-colors">ถูกใจ</button>
                <button className="text-[10px] font-semibold text-gray-500 hover:text-blue-400 transition-colors">ตอบกลับ</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CommentSection;
