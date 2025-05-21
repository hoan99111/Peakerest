import { IconMoodSmile } from "@tabler/icons-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";

export const CommentForm = ({id}) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const handleEmojiClick = (emoji) => {
    
    setDesc((prev)=>prev + emoji.emoji)
    setOpen(false)

  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const res = await apiRequest.post("/comments", {
      description: desc, 
      pin: id,
    })
  }

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        value={desc}
      />
      <div className="emoji">
        <div onClick={() => setOpen(!open)}>
          <IconMoodSmile stroke={2} />
        </div>
        {open && (
          <div className="emojiPicker">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};
