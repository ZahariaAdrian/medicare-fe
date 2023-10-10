/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatedDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import { FeedbackForm } from "./FeedbackForm";

export const FeedBack = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>

        <div className="flex justify-between gap-10px mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full ">
              <img src={avatar} className="w-full" alt="avatar" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Ali Ahmed
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatedDate("02-04-2010")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px] ">
                Good services, highly recommend it!
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar
                key={index}
                color="#0067FF
            "
              />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};
