import "./R.css";

export default function Rightbar() {

  const HomeRightbar = () => {
    return (
      <>
        <img className="rightbarAd" src="../../../assets/post/food1.jpg" alt="" />
        <img className="rightbarAd" src="../../../assets/post/food2.jpg" alt="" />
        {/* <img className="rightbarAd" src="../../../assets/post/ad3.jpeg" alt="" /> */}
        
      </>
    );
  }

  return (
    <div className="main">
      <div className="rightbarWrapper">
        {/* <Rightbar /> */}
        <h2 className="rightbarTitle">Advertisements</h2>
        <HomeRightbar />
      </div>
    </div>
  );
}