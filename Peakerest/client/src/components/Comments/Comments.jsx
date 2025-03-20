import { useState } from "react";
import { Image } from "../image/image";
import "./Comments.css";
import EmojiPicker from "emoji-picker-react";
import { IconMoodSmile } from "@tabler/icons-react";

export const Comments = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount"> 5 comments</span>
        {/* COMMENt */}
        <div className="comment">
          <Image path="./general/noAvatar.png"></Image>
          <div className="commentContent">
            <span className="commentUsername">John</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, voluptatibus quasi.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="./general/noAvatar.png"></Image>
          <div className="commentContent">
            <span className="commentUsername">John</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, voluptatibus quasi.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <div className="comment">
          <Image path="./general/noAvatar.png"></Image>
          <div className="commentContent">
            <span className="commentUsername">John</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, voluptatibus quasi.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div onClick={() => setOpen(!open)}>
            <IconMoodSmile stroke={2} />
          </div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
