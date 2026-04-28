import React, { useState } from 'react';

function StartPost() {
    const [postText, setPostText] = useState("");

    const handlePostSubmit = () => {
        alert("You posted: " + postText);
        setPostText("");
    };

    return (
        <div className="post-box-container">
            {/* TOP ROW: User Icon and Input */}
            <div className="post-input-row">
                <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="user-avatar"
                />
                <input
                    type="text"
                    placeholder="Start a post"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
            </div>

            <div className="post-actions-row">
                <button className="action-btn">
                    <span className="icon">🖼️</span>
                </button>

                <button className="action-btn">
                    <span className="icon">🎥</span> Video
                </button>

                <button className="action-btn">
                    <span className="icon">📅</span>
                </button>

                {postText.length > 0 && (
                    <button className="submit-post-btn" onClick={handlePostSubmit}>Post</button>
                )}
            </div>
        </div>
    );
}

export default StartPost;