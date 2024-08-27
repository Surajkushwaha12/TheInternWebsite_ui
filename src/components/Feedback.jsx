import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

const Feedback = () => {
  return (
    <div className="h-[657px] w-full bg-[#F6EECB] pt-10 px-28">
      <section className="grid grid-cols-2 px-10 py-10">
        <div>
          <p className="text-4xl text-black  font-semibold tracking-wider py-10">
            Get in Touch
          </p>
          <div className="tracking-wider">
            <div className="flex items-center gap-2 ">
              <CiLocationOn className="text-2xl" />
              <p className="py-4 text-black font-semibold">
                Sector 39, Gurugram, Haryana - 122003
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <CiMail className="text-2xl" />
              <p className="py-4 text-black  font-semibold">
                hr@theinterns.org.in
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <IoCallOutline className="text-2xl" />
              <p className="py-4 text-black font-semibold">+91 7827841189</p>
            </div>
            <div className="flex items-center gap-2 pt-4 ">
              <IoTimeOutline className=" text-2xl" />
              <p className="  text-black font-semibold">
                Monday - Friday: 10:00 - 19:00
              </p>
            </div>
            <p className="pt-2 text-black ml-7 font-semibold">
              Saturday: 10:00 - 16:00
            </p>
            <p className="pt-2 text-black ml-7 font-semibold">Sunday: Closed</p>
          </div>
        </div>

        <div className="border border-black rounded-xl relative">
          <p className="text-4xl text-black text-center py-5  ">
            Share Your Feedback
          </p>

          <form className="ml-10 mb-5 ">
            <label className=" text-md py-4 ">Name </label> <br />
            <input
              type="text"
              placeholder="Your Name"
              className="placeholder:text-md py-3 pl-2 mb-4 rounded-xl w-[450px] h-[40px]"
            />{" "}
            <br />
            <label className=" text-md my-4 ">Your Email* </label> <br />
            <input
              type="text"
              placeholder="Your Email address"
              className="placeholder:text-md py-3 pl-2 mb-4 rounded-xl my-1 w-[450px] h-[40px]"
            />{" "}
            <br />
            <label className=" text-md my-4 ">Message* </label> <br />
            <input
              type="text"
              className="placeholder:text-md  my-1 rounded-xl w-[450px] h-[120px]"
            />{" "}
            <br />
            <div className="mx-56 absolute">
              <button className="bg-[#BFA55B] py-1 mt-2 px-10 rounded-2xl text-white mx-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
