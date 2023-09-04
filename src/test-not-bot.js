import { Button } from "antd";
import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router";

function onChange(value) {
  console.log("Captcha value:", value);
}

function RobotTest({ login, ref2, ref1 }) {
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <p className="m-0 mt-3 mb-2">
        {isChecked ? "Testni o'tdingiz!" : "Testni o'tmagan ekansiz"}
      </p>
      <div className="border-2 border-solid border-gray-300 rounded-md mb-4 p-2 flex items-center justify-between">
        {/* <h2>I'm not a robot testi</h2> */}
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Men robot emasman
        </label>
        <div className="flex flex-col-reverse items-center">
          <div className="text-center">
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_8_31)">
                <path
                  d="M17.3993 1C24.8742 1 28.8103 5.92597 29.2056 6.44672L32.062 3.61201L32.222 15.7091L19.9687 15.6108L23.9235 11.6874C23.5704 11.188 21.5955 8.65526 17.6162 8.27437C16.2291 8.14161 14.9823 8.43596 13.9242 8.90233L9.51367 3.04185C11.4736 1.94226 14.1121 1 17.3993 1Z"
                  fill="black"
                />
              </g>
              <path
                d="M17.3993 1C24.8742 1 28.8103 5.92597 29.2056 6.44672L32.062 3.61201L32.222 15.7091L19.9687 15.6108L23.9235 11.6874C23.5704 11.188 21.5955 8.65526 17.6162 8.27437C16.2291 8.14161 14.9823 8.43596 13.9242 8.90233L9.51367 3.04185C11.4736 1.94226 14.1121 1 17.3993 1Z"
                fill="#2B4CB9"
              />
              <g filter="url(#filter1_d_8_31)">
                <path
                  d="M16.652 1.04077L16.5505 12.907L12.5459 9.12C12.0934 9.41496 9.39756 11.3265 8.99776 15.2437C8.89304 16.2698 9.04568 17.2166 9.33826 18.0633L1.75135 18.2791C1.583 17.4005 1.48608 16.4584 1.48608 15.4537C1.48608 8.09486 6.74294 4.27766 7.13345 4.00425L4.16022 1.19569L16.652 1.04077Z"
                  fill="black"
                />
              </g>
              <path
                d="M16.652 1.04077L16.5505 12.907L12.5459 9.12C12.0934 9.41496 9.39756 11.3265 8.99776 15.2437C8.89304 16.2698 9.04568 17.2166 9.33826 18.0633L1.75135 18.2791C1.583 17.4005 1.48608 16.4584 1.48608 15.4537C1.48608 8.09486 6.74294 4.27766 7.13345 4.00425L4.16022 1.19569L16.652 1.04077Z"
                fill="#5A96F6"
              />
              <g filter="url(#filter2_d_8_31)">
                <path
                  d="M1.54248 16.1727L13.7957 16.271L9.84093 20.1944C10.194 20.6938 12.1689 23.2265 16.1482 23.6074C20.5664 24.0303 23.5626 20.1196 23.5626 20.1196L28.4101 25.4505C28.4101 25.4505 24.2571 30.8818 16.3651 30.8818C8.89021 30.8818 4.95411 25.9558 4.5589 25.4351L1.70245 28.2698L1.54248 16.1727Z"
                  fill="black"
                />
              </g>
              <path
                d="M1.54248 16.1727L13.7957 16.271L9.84093 20.1944C10.194 20.6938 12.1689 23.2265 16.1482 23.6074C20.5664 24.0303 23.5626 20.1196 23.5626 20.1196L28.4101 25.4505C28.4101 25.4505 24.2571 30.8818 16.3651 30.8818C8.89021 30.8818 4.95411 25.9558 4.5589 25.4351L1.70245 28.2698L1.54248 16.1727Z"
                fill="#BEBEBE"
              />
              <defs>
                <filter
                  id="filter0_d_8_31"
                  x="8.51367"
                  y="0"
                  width="24.7083"
                  height="16.7091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_8_31"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_8_31"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_8_31"
                  x="0.486084"
                  y="0.0407715"
                  width="17.1658"
                  height="19.2383"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_8_31"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_8_31"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_8_31"
                  x="0.54248"
                  y="15.1727"
                  width="28.8677"
                  height="16.7091"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.382529 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_8_31"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_8_31"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p className=" text-gray-300 text-sm m-0">reCAPTCHA</p>
            <p className=" text-gray-300 text-sm m-0">Privacy - Terms</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          style={{ fontFamily: "Rubik" }}
          className="font-bold bg-blue-600 text-white w-1/3 mb-5 py-3 border-none rounded-md"
          onClick={login}
        >
          Kirish
        </button>

        <p
          className="m-0 cursor-pointer animate-bounce animatepulse"
          ref={ref2}
          onClick={() => navigate("/register/sponser")}
        >
          Register Sponser
        </p>
      </div>
    </div>
  );
}

export default RobotTest;
