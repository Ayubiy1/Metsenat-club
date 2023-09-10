import { ArrowLeftOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { useNavigate } from "react-router";
import { Form } from "antd";
import { OtmData } from "../../../data/otm";
import { Option } from "antd/es/mentions";
import { useDispatch, useSelector } from "react-redux";
import { setStudentsData } from "../../../redux/new-studentR";

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 md:px-16 lg:px-[120px] " + className}>{children}</div>
  );
};

export const AddStudent = () => {
  const studentD = useSelector((state) => state.studentsData.studentData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ids = studentD.map((student) => student.id);

  const maxId = Math.floor(Math.max(...ids));

  const onfinish = (value) => {
    const newData = {
      id: maxId + 1,
      ...value,
      allocatedAmount: 0,
      sponses: [],
    };
    console.log(newData);
    dispatch(setStudentsData(newData));
    navigate("/admin/students");
  };

  return (
    <>
      <div>
        <div className="h-[40px] pb-3 bg-[#fff] flex items-center">
          <Container>
            <div className="flex items-center bg-[rgba(255, 255, 255, 1)]">
              <span
                className="cursor-pointer"
                onClick={() => navigate("/admin/students")}
              >
                <ArrowLeftOutlined />
              </span>

              <p className="m-0 font-">Talaba qo‘shish</p>
            </div>
          </Container>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-col bg-[#fff] rounded-xl shadow-lg w-[700px] h-[400px]">
            <Form
              layout="vertical"
              className="w-[90%] mt-5 mx-auto"
              onFinish={onfinish}
            >
              <div className="flex items-center justify-between gap-3">
                <Form.Item
                  className="w-[50%]"
                  label="F.I.Sh. (Familiya Ism Sharif)"
                  rules={[
                    {
                      required: true,
                      message: "F.I.Sh(Familiya Ism Sharif)ni kiriting",
                    },
                  ]}
                  tooltip="F.I.Sh. (Familiya Ism Sharif) ni kiriting"
                  name={"name"}
                >
                  <Input placeholder="" />
                </Form.Item>

                <Form.Item
                  className="w-[50%]"
                  label="Telefon raqam"
                  name={"phone"}
                  tooltip={{
                    title: "Telefon raqam kiritishingiz kerak",
                    icon: <InfoCircleOutlined />,
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Telefon raqam kiritishingiz kerak",
                    },
                  ]}
                >
                  <Input placeholder="" />
                </Form.Item>
              </div>

              <Form.Item
                name={"universitet"}
                label={"OTM"}
                rules={[{ required: true, message: "OTM ni tanlang" }]}
              >
                <Select
                  options={OtmData}
                  style={{ width: "100%" }}
                  defaultValue={"OTM ni tanlang"}
                  allowClear
                />
              </Form.Item>

              <div className="flex gap-10 items-center justify-center w-[100%]">
                <Form.Item
                  name={"typeStudent"}
                  label={"Talabalik turi"}
                  rules={[{ required: true, message: "OTM ni tanlang" }]}
                >
                  <Select
                    style={{ width: "300px" }}
                    defaultValue={"Barchasi"}
                    allowClear
                  >
                    <Option value="Bakalavr">Bakalavr</Option>
                    <Option value="Magistr">Magistr</Option>
                  </Select>
                </Form.Item>{" "}
                <Form.Item
                  name={"contractAmount"}
                  label={"Kontrakt summa"}
                  rules={[{ required: true, message: "OTM ni tanlang" }]}
                >
                  <Input
                    type="text"
                    style={{ width: "300px" }}
                    placeholder={"Summani kiriting"}
                  />
                </Form.Item>
              </div>

              <Form.Item className="hover:text-[#fff]">
                <Button
                  className="bg-blue-500 text-white font-bold hover:text-[#fff]"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
