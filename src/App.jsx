import "./App.css";
import register from "./assets/register.png";
import addphoto from "./assets/addphoto.png";
import socialinterest from "./assets/interest3.png";
import hobbies from "./assets/interest4.png";
import congrats from "./assets/lastpage.png";
import smallcircle from "./assets/smallcircle.png";
import mediumcircle from "./assets/mediumcircle.png";
import bigcircle from "./assets/bigcircle.png";
import Navbar from "./components/Navbar";
import Register from "./components/register/Register";
import AddPhoto from "./components/addPhoto/AddPhoto";
import SocialInterest from "./components/interest/SocialInterest";
import Hobbies from "./components/hobbies/Hobbies";
import Congrats from "./components/congrats/Congrats";
import { useSelector } from "react-redux";
import Home from "./components/Home";

const App = () => {
  const {page: {page}} = useSelector((state) => state.page);

  let Component = null;

  if (page !== "home") {
    Component = getComponent()[page].component;
  }

  return (
    <div className="body">
      {page === "home" ? 
      <Home />
      : 
      <>
      <div className="image-container">
        <img src={bigcircle} alt="" className="bigCircle" />
        <img src={smallcircle} alt="" className="smallCircle" />
        <img src={mediumcircle} alt="" className="mediumCircle" />
        <div className="img-div">
          <img src={getComponent()[page].image} alt="" />
        </div>
      </div>
      <div className="component">
        {page !== "page_5" && <Navbar />}
        <Component />
      </div>
      </>
      }
    </div>
  );
};

const getComponent = () => ({
  page_1: {
    image: register,
    component: Register,
  },
  page_2: {
    image: addphoto,
    component: AddPhoto,
  },
  page_3: {
    image: socialinterest,
    component: SocialInterest,
  },
  page_4: {
    image: hobbies,
    component: Hobbies,
  },
  page_5: {
    image: congrats,
    component: Congrats,
  },
});

export default App;
