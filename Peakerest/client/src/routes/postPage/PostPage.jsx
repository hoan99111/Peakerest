import { Link } from "react-router";
import { Image } from "../../components/image/image";
import { PostInteraction } from "../../components/PostInteraction/PostInteraction";
import "./PostPage.css";
import { IconArrowBack } from "@tabler/icons-react";
import { Comments } from "../../components/Comments/Comments";
export const PostPage = () => {
  return (
    <div className="postPage">
      <IconArrowBack className="backArrow" stroke={2} />
      <div className="postContainer">
        <div className="postImg">
          <Image path="pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteraction></PostInteraction>
          <Link to="/jonh" className="postUser">
            <Image path="/general/noAvatar.png"></Image>
            <span>John</span>
          </Link>
          <Comments></Comments>
        </div>
      </div>
    </div>
  );
};
