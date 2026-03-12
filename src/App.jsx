import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";
import "./index.css";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import { Routes, Route, Link , useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import JoinNow from "./components/Join";
import logo from "./images/logo.png";
import bg from "./images/bg.png";


// import './images'


import Host from "./components/Host";
import JoinEvent from "./components/JoinEvent";



function App() {
const [shouldHide, setShouldHide] = useState(false);
const navigate = useNavigate();

  const refreshHandler = () => {
    
    window.location.reload();
    setShouldHide(false);
    navigator.navigate("/");
    
  };
  const displayHandler = () => {
    setShouldHide(true);
    console.log("Something clicked");
  };

  return (
    <>
      <div className={shouldHide ? " " : "d-none"}>
      <div className="absolute w-full  top-0 ">
          <nav  className="  flex justify-between transition duration-300 ease-in-out text-center items-center hover:bg-[#FDE579]  p-3 w-full text-lg absolute z-10  gap-2 font-bold ">
            <div className="w-[10rem] h-[5rem]">
              <img className="object-cover w-full h-full cursor-pointer bg-transparent scale-[0.8] hover:shadow-lg" 
              src={logo} alt="" />
            </div>
            <div className="p-2">
              <Link
                to="/"
                onClick={refreshHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                About
              </Link>
              <Link
                to="/contribute"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                Contribute
              </Link>
              <Link
                to="/join"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                Join Now
              </Link>
            </div>

            <div className="flex justify-center gap-4">
              <button className="p-2 rounded-full hover:text-green-800 hover:underline hover:scale-110 hover:shadow-lg ">
                Host event
              </button><button className="p-2 rounded-full hover:text-green-800 hover:underline hover:scale-110 hover:shadow-lg ">
                Join a Event
              </button>
              <Link
                to="/join"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:underline hover:scale-110 hover:shadow-lg"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      </div>


      {/*  */}


      <div className={shouldHide ? "d-none" : ""}>
        <img
          className="w-full h-screen object-cover scale-x-[1] z-0 relative "
          src={bg}
          alt="loading"
        />
        <div className="absolute w-full  top-0 text-white hover:text-black ">
          <nav  className="  flex justify-between transition duration-300 ease-in-out text-center items-center hover:bg-[#FDE579]  p-3 w-full text-lg absolute z-10  gap-2 font-bold ">
            <div className="w-[10rem] h-[5rem]">
              <img className="object-cover cursor-pointer bg-transparent scale-[1] w-[8rem] h-[6rem] rounded-[50%] p-2  hover:shadow-lg" 
              src={logo} alt="" />
            </div>
            <div className="p-2">
              <Link
                to="/"
                onClick={refreshHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                About
              </Link>
              <Link
                to="/contribute"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                Contribute
              </Link>
              <Link
                to="/join"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:scale-110 hover:shadow-lg"
              >
                Join Now
              </Link>
            </div>

            <div className="flex justify-center gap-4">
              <button className="p-2 rounded-full hover:text-green-800 hover:underline hover:scale-110 hover:shadow-lg ">
                Host event
              </button><button className="p-2 rounded-full hover:text-green-800 hover:underline hover:scale-110 hover:shadow-lg ">
                Join a Event
              </button>
              <Link
                to="/join"
                onClick={displayHandler}
                className="p-2 rounded-full hover:text-green-800 hover:underline hover:scale-110 hover:shadow-lg"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>

        <div className="absolute text-white items-center top-0 left-0  h-screen w-full">
          <div className="  w-full h-screen flex flex-col justify-center items-center">
            
            <TypeAnimation
              className="text-[#efe7dd] font-bold text-[5rem] mt-10"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "MAKE A BETTER FUTURE",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "HELP FOR GREATER GOOD",
                1000,
                "CALL FOR YOU",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <div className="flex p-2 gap-5 mt-5">
              <FaTwitter
                className=" cursor-pointer hover:text-green-500"
                size={30}
              />
              <FaFacebook
                className=" cursor-pointer hover:text-green-500"
                size={30}
              />
              <FaInstagram
                className=" cursor-pointer hover:text-green-500"
                size={30}
              />
              <FaLinkedinIn
                className=" cursor-pointer hover:text-green-500"
                size={30}
              />
            </div>
          </div>
        </div>
      </div>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contribute" element={<Contact />} />
        <Route path="/join" element={<JoinNow />} />
        <Route path="/host" element={<Host />} />
        <Route path="/joinEvent" element={<JoinEvent />} />
      </Routes>



      {/* footer  */}



      <footer className="">
        <div className="">
          <div className="flex justify-center items-center gap-[10rem] p-5">
            
            <div className="p-5 ">
              <div className="flex flex-col justify-center items-center pt-20 gap-2 text-center px-5">
                <h5 className= " font-bold cursor-pointer hover:underline">About</h5>
                <ul className="flex flex-col gap-2 px-5 duration-200 ease-in">
                  <li className=" hover:underline hover:font-bold ">
                    <a href="#!">Benefits</a>
                  </li>
                  <li className="hover:underline hover:font-bold ">
                    <a href="#!">Careers</a>
                  </li>
                  <li className="hover:underline hover:font-bold">
                    <a href="#!">Our Story</a>
                  </li>
                  <li className="hover:underline hover:font-bold">
                    <a href="#!">Team</a>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="">
              <div className="">
                <h5 className="font-bold cursor-pointer hover:underline">Help</h5>
                <ul className="">
                  <li className="hover:underline hover:font-bold ">
                    <a href="">Contact Us</a>
                  </li>
                  <li className="hover:underline hover:font-bold ">
                    <a href="">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div style={{ backgroundColor: "#F4F4F4", padding: 35 }}>
                <h5 className="">Subscribe</h5>
                <div className=" ">
                  <form
                    action="#!"
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                  >
                    <div className="">
                      <input
                        type="text"
                        className=""
                        placeholder="Email address"
                      />{" "}
                      <span className="">
                        <button
                          className=""
                          type="submit"
                          name="subscribe"
                          aria-label="Subscribe for Newsletter"
                        >
                          <i className="fas fa-arrow-right" />
                        </button>
                      </span>
                    </div>
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_463ee871f45d2d93748e77cad_a0a2c6d074"
                        tabIndex={-1}
                      />
                    </div>
                  </form>
                </div>
                <p className="">Subscribe to our Newsletter!</p>
              </div>
            </div>
          </div>

          {/*  */}

          <div className=" ">
            
            
            <div className=" flex w-full  justify-center p-5 ">
              <ul className=" flex justify-center items-center gap-2">
                <li className="">
                  <a
                    title="Join Whatsapp community"
                    className="text-black hover:text-green-800"
                    href="https://chat.whatsapp.com/CFMPnYKORMMBNaRYm3042w"
                  >
                    {/* <i className="fab fa-whatsapp" /> */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:text-green-800"
                      height={40}
                      width={40}
                      viewBox="0 0 448 512"
                    >
                      {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>


                  </a>
                </li>
                <li className="">
                  <a
                    title="Explorer Twitter Profile"
                    className="text-black"
                    href="https://twitter.com/noobs_learning"
                  >
                    


                  </a>
                </li>
                <li className="">
                  <a
                    title="Explorer Instagram Profile"
                    className="text-black"
                    href=""
                  >
                    {/* <i className="fab fa-instagram" />
                     */}
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={40}
                      width={40}
                      viewBox="0 0 448 512"
                    >
                      {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
    
    </>
  );
}

export default App;
