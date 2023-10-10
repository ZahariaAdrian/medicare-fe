/* eslint-disable no-unused-vars */
import React from "react";
import { formatedDate } from "../../utils/formateDate";

export const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Muhibur Rahman
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus earum
          officiis ratione necessitatibus id, dicta voluptatum eius beatae ut
          quas. Doloremque minus iure veritatis enim esse veniam tempore ut
          impedit aperiam aut quidem, consequuntur exercitationem perspiciatis
          natus maxime deserunt fugiat?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatedDate("05-25-1998")} - {formatedDate("03-15-2004")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatedDate("04-06-2010")} - {formatedDate("05-25-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Agriculture
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                SC Corsa Intercom SRL, Marculesti.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatedDate("05-25-1998")} - {formatedDate("03-15-2004")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Bar Administrator
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Indigo Inn, Marculesti.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatedDate("05-25-1998")} - {formatedDate("03-15-2004")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Bar Administrator
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Indigo Inn, Marculesti.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
