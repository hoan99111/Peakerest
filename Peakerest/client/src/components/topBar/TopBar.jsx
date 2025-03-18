import { Image } from "../image/image"
import UserBotton from "../UserBotton/UserBotton"
import "./TopBar.css"


const TopBar = () => {
  return (
    <div className="topBar">
    {/* search */}
      <div className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder="Search"/>
      </div>
      {/* user */}
      <UserBotton></UserBotton>
    </div>
  )
}

export default TopBar