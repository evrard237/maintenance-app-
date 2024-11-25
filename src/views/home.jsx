import Form from "../components/form.jsx";
import Header from "../components/header.jsx";
import Layout from "../components/layout.jsx";
import Navbar from "../components/navbar/index.jsx";
import robot from "../assets/background.jpg";
import wallpaper from "../assets/Brown and Beige Simple Furniture Banner Landscape.png"


function Home() {
  return (
    <>
      <Header />
      <div className=" w-full h-auto  bg-[image:var(--image-url)]   "  style={{'--image-url': `url(${wallpaper})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}  >
        <div className="lg:w-1/5 p-20 text-center content-center md:w-full wallpaper" >
          <h2>Welcome Anna !!!!</h2>
        </div>
        <div className="xxl:w-full xl:w-full lg:w-full xxl:flex lg:flex md:flex  justify-between   h-150   ">
          <div className="xxl:w-1/7 xl:w-1/6 lg:w-1/6 md:w-0   ">
            {/* <img src={robot} alt="image" /> */}
          </div>
          <div className="xxl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-full ">
            <Form />
          </div>
          <div className="xxl:w-1/7 xl:w-1/6 lg:w-1/6 md:w-0  ">
            {/* <img src={robot} alt="image" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
