import { Image } from "../image/image";
import "./Comments.css";

export const Comments = () => {
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
              Molestias, voluptatibus quasi. Similique distinctio deleniti ut
              cum, quisquam saepe, et error commodi animi omnis reprehenderit,
              corrupti qui dolorem praesentium laborum iusto.
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        <form className="commentForm">
          <input type="text" placeholder="Add a comment" />
          <div className="emoji">
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};
