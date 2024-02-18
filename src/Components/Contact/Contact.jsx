import React from "react";
import ContactImage from "../../assets/Contact.svg";

const Contact = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-4">
      <div data-aos="fade-up" className="flex-1">
        <img src={ContactImage} alt="contactImage" className="w-full" />
      </div>
      <div className="flex-1">
        <div className="three text-4xl lg:text-6xl font-semibold mb-5 md:mb-0">
          <h1>Talk with us</h1>
        </div>
        <form data-aos="fade-up" action="" className="flex flex-col gap-0">
          <div className="w-full toyBorder">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="outline-none bg-transparent w-full placeholder:text-white tracking-widest"
            />
          </div>
          <div className="w-full toyBorder">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="outline-none bg-transparent w-full placeholder:text-white tracking-widest"
            />
          </div>
          <div className="w-full toyBorder">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required
              className="outline-none bg-transparent w-full placeholder:text-white tracking-widest"
            ></textarea>
          </div>
          <button className="toyButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
