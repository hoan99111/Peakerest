import { Image } from "../image/image";
import "./PostInteraction.css";

export const PostInteraction = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="/general/react.svg">273</Image>
        <Image path="/general/share.svg"></Image>
        <Image path="/general/more.svg"></Image>
      </div>
      <button>Save</button>
    </div>
  );
};
