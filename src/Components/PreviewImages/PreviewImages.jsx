import React, { useEffect, useState } from "react";
import imgUpload from "../../assets/imgeupload.svg";

const PreviewImages = ({ PreviewImages }) => {
  const [fullImage, setFullImage] = useState(null);
  useEffect(() => {
    PreviewImages && setFullImage(PreviewImages[0]);
  }, [PreviewImages]);
  return (
    <div className="h-[500px]">
      <div className="grid grid-cols-12 gap-0 md:gap-[30px] ">
        {/* all images */}
        <div className="col-span-3 flex flex-col gap-5 h-[500px]   overflow-y-scroll ">
          {PreviewImages?.map((image, index) => {
            return (
              <button
                key={index}
                onClick={() => setFullImage(image)}
                className={`active:scale-90 transition-all duration-200 border rounded-xl focus:border-[#6BCCCB] outline-none`}
              >
                <img
                  src={`${image}`}
                  className="w-[73px] h-[73px] md:w-[177px] md:h-[177px] border rounded-xl "
                />
              </button>
            );
          })}
        </div>
        {/* preview image */}
        <div className="col-span-9 rounded-xl flex items-center justify-center">
          {fullImage && PreviewImages ? (
            <img
              src={fullImage}
              className=" md:w-[480px] md:h-[480px] rounded-xl"
            />
          ) : (
            <img
              src={imgUpload}
              className=" md:w-[480px] md:h-[480px] rounded-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewImages;
