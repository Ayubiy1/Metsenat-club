// import { Container } from "../mini-components/container";
import { Button, Radio } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { blue } from "@ant-design/colors";
import { useDispatch, useSelector } from "react-redux";
import { targetValue } from "../../redux/slice";
import { useLocalStorageState } from "ahooks";
// import { targetValue } from "../../redux/slice";

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 md:px-16 lg:px-[120px] " + className}>{children}</div>
  );
};

export const StyledTab = styled(Radio.Group)`
  .ant-radio-button-wrapper-checked {
    background-color: ${blue[5]};
    color: white;
    &:hover {
      color: white;
    }
  }
`;

export const SecondaryHeader = ({ tab }) => {
  const values = useSelector((store) => store.value.valueStudents);

  const [activate, setActiv] = useLocalStorageState("active-btn-menu", {
    defaultValue: 1,
  });

  // const [activate, setActiv] = useState(1);

  const [activatNavigate, setActivNavigate] = useLocalStorageState(
    "active-navvigate",
    {
      defaultValue: "dashboard",
    }
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    navigate(`/admin/${e}`);
    dispatch(targetValue(""));
  };

  return (
    <div className={"flex items-center justify-between mt-5 mb-4"}>
      <Radio.Group>
        <Button
          value={"dashboard"}
          onClick={(e) => {
            onChange("dashboard");
            setActiv(1);
          }}
          className={
            1 == activate
              ? "bg-blue-600 text-white hover:text-white rounded-none px-10 rounded-l-md"
              : " rounded-none px-10 rounded-l-md"
          }
        >
          Dashboard
        </Button>

        <Button
          value={"sponsors"}
          onClick={(e) => {
            onChange("sponsors");
            setActiv(2);
          }}
          className={
            2 == activate
              ? "bg-blue-600 text-white hover:text-white rounded-none px-10"
              : " rounded-none px-10"
          }
        >
          Homiylar
        </Button>

        <Button
          value={"students"}
          onClick={(e) => {
            onChange("students");
            setActiv(3);
          }}
          className={
            3 == activate
              ? "bg-blue-600 text-white hover:text-white rounded-none px-10 rounded-r-md"
              : " rounded-none px-10 rounded-r-md"
          }
        >
          Talabalar
        </Button>
      </Radio.Group>

      <div className="rounded-md h-[40px] flex items-center">
        <div className="bg-gray-200 w-[284px] rounded-md h-full flex items-center justify-start gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <g clip-path="url(#clip0_120_1388)">
              <path
                d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
                stroke="#B1B1B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 17.5L12.5 12.5"
                stroke="#B1B1B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_120_1388">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            className="outline-none text-start text-gray-400 border-0 bg-transparent"
            type="text"
            placeholder="Izlash"
            onChange={(e) => dispatch(targetValue(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
