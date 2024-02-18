
import React from "react";
import aboutImage from "../../../../assets/about.jpg";

const About = () => {
  return (
    <div data-aos="zoom-in" className="wrapper h-screen min-h-screen flex flex-col md:flex-row items-center justify-between md:gap-8 mb-20 lg:mb-0 pt-10 lg:pt-0">
      <div className="py-2 md:border-r-2 md:border-b-2 border-white rounded-br-md" >
        <img src={aboutImage} alt="" className="md:-mt-4 md:-ml-2 rounded-md" />
      </div>
      <hr className="h-96 border-r border-white hidden md:block" />
      <div className="text-white">
        <div className="three text-4xl lg:text-6xl font-semibold mb-5 md:mb-14">
          <h1>About Us</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          fugiat neque delectus voluptatum dolor similique non totam quis ipsa
          fuga dolorem modi sunt amet reiciendis earum esse vitae asperiores in,
          nobis magnam, numquam aut. Dolorem eum laboriosam, suscipit ducimus
          quasi veniam, cumque, quis excepturi distinctio quibusdam placeat fuga
          consequuntur inventore doloremque. Eos porro ex doloribus
          voluptatibus, quo adipisci earum accusantium quos ipsa minus cumque
          repudiandae, aspernatur unde eligendi magni asperiores voluptas! Sunt
          dolorum ipsum, enim illum unde reiciendis sequi velit recusandae
          cumque perspiciatis eos ut in explicabo. Quaerat excepturi inventore
          voluptatibus sed adipisci nulla cum ipsum eligendi, error, eveniet
          nam!
        </p>
      </div>
    </div>
  );
};

export default About;
