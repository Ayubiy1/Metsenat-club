import { Button, Form, Modal, Radio, Select } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { targetValue } from "../../redux/slice";
import { Option } from "antd/es/mentions";

export const SecondaryHeader = ({ tab, filter, setFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
    <div
      className={
        "flex flex-wrap gap-10 items-center justify-center lg:justify-between mt-5 mb-4"
      }
    >
      <Radio.Group>
        <Button
          value={"dashboard"}
          onClick={(e) => {
            onChange("dashboard");
          }}
          className={
            "/admin/dashboard" == location.pathname
              ? "w-[100%] sm:w-[150px] my-1 bg-blue-600 text-white hover:text-white rounded-none px-10 rounded-l-md"
              : " rounded-none px-10 w-[100%] sm:w-[150px] my-1 rounded-l-md"
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
              ? "w-[100%] sm:w-[150px] my-1 bg-blue-600 text-white hover:text-white rounded-none px-10"
              : " rounded-none px-10 w-[100%] sm:w-[150px] my-1"
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
              ? "w-[100%] sm:w-[150px] my-1 bg-blue-600 text-white hover:text-white rounded-none px-10 rounded-r-md"
              : " rounded-none px-10 w-[100%] sm:w-[150px] my-1 rounded-r-md"
          }
        >
          Talabalar
        </Button>
      </Radio.Group>

      <div className="rounded-md h-[40px] flex gap-5 items-center">
        {location.pathname !== "/admin/dashboard" && (
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
        )}

        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          {location.pathname == "/admin/students" ? (
            <Form className="w-[100%]" onFinish={change}>
              <Form.Item label="Talabalik turi" name={"sort"}>
                <Select defaultValue={"Barchasi"} className="w-[100%]">
                  <Option value="Bakalavr">Bakalavr</Option>
                  <Option value="Magistr">Magistr</Option>
                  <Option value="Barchasi">Barchasi</Option>
                </Select>
              </Form.Item>

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
