import { Link, useParams } from "react-router";
import { Image } from "../../components/image/image";
import { PostInteraction } from "../../components/PostInteraction/PostInteraction";
import "./PostPage.css";
import { IconArrowBack } from "@tabler/icons-react";
import { Comments } from "../../components/Comments/Comments";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

export const PostPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });
  if (isPending) return "Loading ...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "Pin not found!!";

  console.log(data);
  return (
    <div className="postPage">
      <IconArrowBack className="backArrow" stroke={2} />
      <div className="postContainer">
        <div className="postImg">
          <Image src={data.media} alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteraction></PostInteraction>
          <Link to={`/${data.user.username}`} className="postUser">
            <Image src={data.user.img || "/general/noAvatar.png"}></Image>
            <span>{data.user.displayName}</span>
          </Link>
          <Comments></Comments>
        </div>
      </div>
    </div>
  );
};
