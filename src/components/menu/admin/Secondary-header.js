// import { Container } from "../mini-components/container";
import { Button, Form, Modal, Radio, Select } from "antd";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { blue } from "@ant-design/colors";
import { useDispatch, useSelector } from "react-redux";
import { targetValue } from "../../redux/slice";
import { useLocalStorageState } from "ahooks";
import { OtmData } from "../../data/otm";
import { Option } from "antd/es/mentions";
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

export const SecondaryHeader = ({ tab, filter, setFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const values = useSelector((store) => store.value.valueStudents);

  const [activate, setActiv] = useLocalStorageState("active-btn-menu", {
    defaultValue: 1,
  });

  const [activatNavigate, setActivNavigate] = useLocalStorageState(
    "active-navvigate",
    {
      defaultValue: "dashboard",
    }
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (e) => {
    navigate(`/admin/${e}`);
    dispatch(targetValue(""));
  };

  const change = (value) => {
    handleCancel();
    setFilter(value);
  };

  return (
    <div className={"flex items-center justify-between mt-5 mb-4"}>
      <Radio.Group>
        <Button
          value={"dashboard"}
          onClick={(e) => {
            onChange("dashboard");
          }}
          className={
            "/admin/dashboard" == location.pathname
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
          }}
          className={
            "/admin/sponsors" == location.pathname
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
          }}
          className={
            "/admin/students" == location.pathname
              ? "bg-blue-600 text-white hover:text-white rounded-none px-10 rounded-r-md"
              : " rounded-none px-10 rounded-r-md"
          }
        >
          Talabalar
        </Button>
      </Radio.Group>

      <div className="rounded-md h-[40px] flex gap-5 items-center">
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
        <Button
          className="flex items-center text-[16px] font-semibold px-9 py-4 bg-[#EDF1FD] border-none text-[#3365FC]"
          onClick={showModal}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6668 1.33334H3.3335C2.80306 1.33334 2.29436 1.54405 1.91928 1.91912C1.54421 2.2942 1.3335 2.8029 1.3335 3.33334V4.11334C1.3334 4.38863 1.39014 4.66098 1.50016 4.91334V4.95334C1.59435 5.16732 1.72776 5.36178 1.8935 5.52667L6.00016 9.60667V14C5.99994 14.1133 6.02859 14.2248 6.08341 14.3239C6.13823 14.4231 6.21742 14.5066 6.3135 14.5667C6.41959 14.6324 6.54201 14.6671 6.66683 14.6667C6.77119 14.666 6.87395 14.6409 6.96683 14.5933L9.6335 13.26C9.74344 13.2046 9.83589 13.1198 9.90061 13.0151C9.96533 12.9104 9.99979 12.7898 10.0002 12.6667V9.60667L14.0802 5.52667C14.2459 5.36178 14.3793 5.16732 14.4735 4.95334V4.91334C14.5927 4.66296 14.6585 4.39052 14.6668 4.11334V3.33334C14.6668 2.8029 14.4561 2.2942 14.081 1.91912C13.706 1.54405 13.1973 1.33334 12.6668 1.33334ZM8.86016 8.86C8.79838 8.9223 8.74949 8.99617 8.71632 9.0774C8.68314 9.15862 8.66632 9.2456 8.66683 9.33334V12.2533L7.3335 12.92V9.33334C7.334 9.2456 7.31719 9.15862 7.28401 9.0774C7.25083 8.99617 7.20195 8.9223 7.14016 8.86L3.60683 5.33334H12.3935L8.86016 8.86ZM13.3335 4H2.66683V3.33334C2.66683 3.15652 2.73707 2.98696 2.86209 2.86193C2.98712 2.73691 3.15669 2.66667 3.3335 2.66667H12.6668C12.8436 2.66667 13.0132 2.73691 13.1382 2.86193C13.2633 2.98696 13.3335 3.15652 13.3335 3.33334V4Z"
              fill="#3365FC"
            />
          </svg>
          Filter
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          // onOk={change}
          onCancel={handleCancel}
          footer={false}
        >
          {location.pathname == "/admin/students" ? (
            <Form className="w-[100%]" onFinish={change}>
              <Form.Item label="Talabalik turi" name={"sort"}>
                <Select
                  // options={}
                  defaultValue={"Barchasi"}
                  className="w-[100%]"
                >
                  <Option value="Bakalavr">Bakalavr</Option>
                  <Option value="Magistr">Magistr</Option>
                  <Option value="Barchasi">Barchasi</Option>
                </Select>
              </Form.Item>

              {/* <Form.Item label="OTM" name={"OTM"}>
              <Select
                options={OtmData}
                defaultValue={"Barchasi"}
                className="w-[100%]"
              />
            </Form.Item> */}
              <Form.Item className="text-right">
                <Button type="primary" htmlType="submit">
                  Filter
                </Button>
              </Form.Item>
            </Form>
          ) : (
            ""
          )}
        </Modal>
      </div>
    </div>
  );
};
