import bg from '../images/contribute bg.png'

function Contact() {
  return (
    <div id="contact">
      <div className='w-full h-screen'>

        <img src={bg} className='w-full h-screen object-cover relative' alt="" />

        <form className=" w-[]   flex flex-col top-[60%] left-[20%] absolute  justify-center ">
            

            <label className=" w-[30rem]">
              <p className="label-heading label-heading text-center font-bold text-[2.5rem] ml-3">
                IDEA
              </p>
              <input
                className="label-input outline-gray-200 mb-2 p-4 shadow-lg border-gray-200  w-full rounded-full focus:shadow-lg"
                placeholder="Enter your idea"
                type="text"
                
                
              />
            </label>

            
            <button
              type="button"
              className="join-btn bg-green-600 p-2 w-[30rem] rounded-full text-[2rem] font-bold text-[#001b5e]  "
              
            >
              Join Now
            </button>
          </form>
      </div>
      <div className="h-[20vh] w-full relative"></div>
      <section className="min-h-[50vh] w-screen  flex-center bg-[#2a2f3f0d] p-10 pt-16">
        <div className="w-[80%] min-h-[50vh] relative ">
          <div className="w-full h-[25em] flex-bet flex-col">
            <div className="w-full h-[80%] flex">
              <div className="w-[40%] h-full relative">
                <div className="w-full min-h-[15%] relative flex">
                  <h1
                    className={`text-[26px] letter w-full flex items-start font-cursive   absolute left-0  h-full`}
                  ></h1>
                </div>
                <div className={`relative w-full h-[60%] leading-10 text-lg `}>
                  <p className="mt-5">
                    We are trying to make the world a better place
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full relative flex justify-end">
                <div className="w-[85%] h-full \">
                  <div className="w-full h-[35%] leading-10">
                    <h5 className={` text-4xl`}>Have a great idea in mind?</h5>
                    <div className=" w-[40%] flex relative">
                      <p className="text-3xl mt-5 text-[#6a6969] relative">
                        Let{"\u0027"}s Connect
                      </p>
                      <i className="bi bi-arrow-up-right absolute right-2 bottom-0 shadow"></i>
                    </div>
                  </div>
                  <div className="relative w-full h-[20%] mt-3">
                    <div className="w-[30%] h-full relative flex items-center justify-start  icons">
                      <i className="bi bi-instagram  animate-bounce pr-7"></i>
                      <i className="bi bi-linkedin animate-bounce pr-7"></i>
                      <i className="bi bi-envelope animate-bounce"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
