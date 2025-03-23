import { useState } from "react";
import { Image } from "../../components/image/image";
import "./ProfilePage.css";
import Gallery from "../../components/Gallery/Gallery";
import { Collections } from "../../components/collections/collections";

export const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Image
        path="/general/noAvatar.png"
        className="profileImg"
        w={100}
        h={100}
      ></Image>
      <h1 className="profileName">John</h1>
      <span className="profileUsername">@John</span>
      <div className="followCounts">10 followers ~ 20 followings </div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt=""></Image>
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt=""></Image>
      </div>
      <div className="profileOptions">
        <span
          className={type === "created" ? "active" : ""}
          onClick={() => setType("created")}
        >
          Create
        </span>
        <span
          className={type === "saved" ? "active" : ""}
          onClick={() => setType("saved")}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery></Gallery> : <Collections></Collections>}
    </div>
  );
};
