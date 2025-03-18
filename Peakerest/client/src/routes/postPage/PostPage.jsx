import { Link } from "react-router";
import { Image } from "../../components/image/image";
import { PostInteraction } from "../../components/PostInteraction/PostInteraction";
import "./PostPage.css";
import { Comments } from "../../components/comments/comments";
export const PostPage = () => {
  return (
    <div className="postPage">
      <div className="postContainer">
        <div className="postImg">
          <Image path="/pins/pin1.jpg" alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteraction></PostInteraction>
          <Link to="/jonh" className="postUser">
            <Image path="/general/noAvatar.png">
              <span>John</span>
            </Image>
          </Link>
          <Comments></Comments>
        </div>
      </div>
    </div>
  );
};
