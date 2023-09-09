import { message, Space } from "antd";
import imgg from "../clip-work-searches 1(1).png";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useLocalStorageState } from "ahooks";
import { Button, Form, Input, Radio } from "antd";
import { useEffect, useState } from "react";
import { editSponsor } from "../../redux/sponsorsT";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const SponserRegister = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };

  const studentSsD = useSelector((state) => state?.sponsorsT?.sponsors);

  const ids = studentSsD.map((student) => student.id);

  const maxId = Math.floor(Math.max(...ids));

  const [size, setSize] = useState("Jismoniy shaxs");
  // const [active, setActive] = useLocalStorageState("person", {
  //   defaultValue: 1,
  // });

  const [active, setActive] = useState(1);

  const [typeS, setTypeS] = useState("");

  const [paymentAmount, setPaymentAmount] = useState("");
  const [another, setAnother] = useState("");
  console.log(another);
  const [anotherValue, setAnotherValue] = useState("");

  const [register, setRegister] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClik = (value) => {
    setAnother(value);
  };

  useEffect(() => {
    if (register === true) {
      setTimeout(function () {
        navigate("/login");
      }, 2000); // 2 saniye = 2000 milisaniye
    }
  });

  const addSponser = (value) => {
    const sponsorSum = another == "BOSHQA" ? anotherValue : another;
    const newData = {
      id: maxId + 1,
      ...value,
      sponsorSum: sponsorSum,
      type: typeS,
      status: "Yangi",
      paid: 0,
    };
    success();
    dispatch(editSponsor(newData));
    setAnotherValue("");
    setRegister(true);
  };

  return (
    <>
      {register === false ? (
        <div className="flex relative items-start justify-center h-[100vh]">
          <div className="w-[700px] mt-10 lg:w-[50%]">
            <div className="w-[90%] p-4">
              <h1>Homiy sifatida ariza topshirish</h1>
              <Radio.Group
                className="w-[100%]"
                onChange={(e) => setSize(e.target.value)}
              >
                <button
                  onClick={() => {
                    setActive(1);
                    setTypeS("jismoniy");
                  }}
                  className={
                    active === 1
                      ? "bg-blue-700 text-white w-[50%] text-center border-solid border-blue-700 py-2 px-6 rounded-l-md"
                      : "w-[50%] text-center bg-transparent border-solid py-2 px-6 rounded-l-md"
                  }
                  value="Jismoniy shaxs"
                >
                  Jismoniy shaxs
                </button>
                <button
                  onClick={() => {
                    setActive(2);
                    setTypeS("yuridik");
                  }}
                  className={
                    active === 2
                      ? "bg-blue-700 text-white w-[50%] text-center border-solid border-blue-700 py-2 px-6 rounded-r-md"
                      : "w-[50%] text-center bg-transparent border-solid py-2 px-6 rounded-r-md"
                  }
                  value="Yuridik shaxs"
                >
                  Yuridik shaxs
                </button>
              </Radio.Group>

              <div>
                <Form
                  layout="vertical"
                  className="w-[90%] mt-5 mx-auto"
                  onFinish={addSponser}
                  // success();
                >
                  <Form.Item
                    className=""
                    label="F.I.Sh. (Familiya Ism Sharifingiz)"
                    rules={[
                      {
                        required: true,
                        message: "F.I.Sh(Familiya Ism Sharif)ni kiriting",
                      },
                    ]}
                    tooltip="F.I.Sh. (Familiya Ism Sharif) ni kiriting"
                    name={"fullName"}
                  >
                    <Input placeholder="Abdullayev Abdulla Abdulla o’g’li" />
                  </Form.Item>

                  <Form.Item
                    className=""
                    label="Telefon raqamingiz"
                    name={"phone"}
                    tooltip={{
                      title: "Telefon raqamingizni kiritishingiz kerak",
                      icon: <InfoCircleOutlined />,
                    }}
                    rules={[
                      {
                        required: true,
                        message: "Telefon raqam kiritishingiz kerak",
                      },
                    ]}
                  >
                    <Input placeholder="+998 00 000-00-00" />
                  </Form.Item>

                  <div className="mt-10">
                    <p className="text-[#1D1D1F] text-[12px] font-bold uppercase">
                      To‘lov summasi
                    </p>

                    <div className="flex gap-[17px] items-center justify-center flex-wrap">
                      <span
                        value={"1d"}
                        className={`py-[17px] w-[188px] cursor-pointer text-[#2E384D] text-center rounded-md text-[18px] font-semibold border-1 border-solid border-[#E0E7FF] bg-transparent ${
                          another == "1d" ? "border-[#2E5BFF]" : ""
                        }`}
                        onClick={() => onClik("1d")}
                      >
                        1 000 000{" "}
                        <span className="text-[#2E5BFF] text-[12px] font-normal">
                          UZB
                        </span>
                      </span>

                      <span
                        value={"3d"}
                        className={`py-[17px] w-[188px] cursor-pointer text-[#2E384D] text-center rounded-md text-[18px] font-semibold border-1 border-solid border-[#E0E7FF] bg-transparent ${
                          another == "3d" ? "border-[#2E5BFF]" : ""
                        }`}
                        onClick={() => onClik("3d")}
                      >
                        3 000 000{" "}
                        <span className="text-[#2E5BFF] text-[12px] font-normal">
                          UZB
                        </span>
                      </span>

                      <span
                        value={"7d"}
                        className={`py-[17px] w-[188px] cursor-pointer text-[#2E384D] text-center rounded-md text-[18px] font-semibold border-1 border-solid border-[#E0E7FF] bg-transparent ${
                          another == "7d" ? "border-[#2E5BFF]" : ""
                        }`}
                        onClick={() => onClik("7d")}
                      >
                        7 000 000{" "}
                        <span className="text-[#2E5BFF] text-[12px] font-normal">
                          UZB
                        </span>
                      </span>

                      <span
                        value={"9500000"}
                        className={`py-[17px] w-[188px] cursor-pointer text-[#2E384D] text-center rounded-md text-[18px] font-semibold border-1 border-solid border-[#E0E7FF] bg-transparent ${
                          another == "9500000" ? "border-[#2E5BFF]" : ""
                        }`}
                        onClick={() => onClik("9500000")}
                      >
                        9 500 000{" "}
                        <span className="text-[#2E5BFF] text-[12px] font-normal">
                          UZB
                        </span>
                      </span>

                      <span
                        value={"12d"}
                        className={`py-[17px] w-[188px] cursor-pointer text-[#2E384D] text-center rounded-md text-[18px] font-semibold border-1 border-solid border-[#E0E7FF] bg-transparent ${
                          another == "12d" ? "border-[#2E5BFF]" : ""
                        }`}
                        onClick={() => onClik("12d")}
                      >
                        12 000 000{" "}
                        <span className="text-[#2E5BFF] text-[12px] font-normal">
                          UZB
                        </span>
                      </span>

                      <span
                        value={"BOSHQA"}
                        className={`py-[17px] w-[188px] cursor-pointer text-[#2E384D] text-center rounded-md text-[18px] font-semibold border-1 border-solid border-[#E0E7FF] bg-transparent ${
                          another == "BOSHQA" ? "border-[#2E5BFF]" : ""
                        }`}
                        onClick={() => onClik("BOSHQA")}
                      >
                        BOSHQA{" "}
                      </span>
                    </div>

                    {another == "BOSHQA" ? (
                      <div className="mt-6">
                        <Input
                          type="number"
                          placeholder=""
                          required
                          onChange={(e) => setAnotherValue(e.target.value)}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <Form.Item className="hover:text-[#fff] mt-10">
                    <Button
                      className="bg-blue-500 text-white font-bold hover:text-[#fff]"
                      htmlType="submit"
                      // onClick={success}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
          <div className="w-[40%] hidden lg:block">
            <div>
              <p>
                Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
                Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
                qoʻymaslik kerak.
              </p>
              <img src={imgg} className="w-[600px] absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
          <div className=" text-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.46 0.362116C66.9123 -1.14504 80.8486 2.0875 92.2418 9.40506C104.099 16.9408 113.18 28.7594 117.299 42.2079C121.124 54.4152 120.871 67.8296 116.624 79.8936C112.24 92.5169 103.437 103.51 92.1736 110.678C73.2259 123.015 47.2555 123.117 28.2191 110.923C16.4509 103.599 7.34182 92.0737 3.03955 78.8843C-0.778634 67.4136 -1.01046 54.7903 2.40545 43.1968C6.46909 29.0186 16.0555 16.5385 28.635 8.85948C36.135 4.21526 44.6986 1.33734 53.46 0.362116ZM54.1077 5.78379C35.4054 7.64557 18.2373 19.9893 10.4918 37.1136C4.56682 49.8051 3.83045 64.8152 8.50772 78.025C12.0805 88.3296 18.8509 97.4885 27.6464 103.94C36.9191 110.821 48.4418 114.592 59.9918 114.579C71.0373 114.592 82.0691 111.155 91.1236 104.813C100.499 98.3342 107.733 88.8207 111.476 78.0523C115.683 66.1724 115.553 52.8194 111.121 41.0213C106.519 28.4593 97.0691 17.7729 85.1918 11.6283C75.7077 6.67717 64.7441 4.60398 54.1077 5.78379Z"
                fill="#E8F3DD"
              />
              <path
                d="M89.9984 37.5364C92.4189 34.8017 97.4712 39.8346 94.7575 42.2829C81.0666 56.086 67.2598 69.7936 53.5348 83.5695C52.0825 85.0834 49.1439 85.6972 47.6984 83.8968C41.3439 77.534 35.0098 71.1508 28.6143 64.8357C27.7143 63.8946 26.4325 62.8853 26.9371 61.4054C27.5439 59.3663 30.4825 56.993 32.378 59.0048C38.4393 64.9721 44.3984 71.0485 50.4462 77.0294C63.6598 63.8946 76.7643 50.6507 89.9984 37.5364Z"
                fill="#B2DA8F"
              />
            </svg>
            <div>
              <p className="m-0 text-[#2E384D] font-bold mt-5">
                Ma’lumotlar tekshirish uchun yuborildi.
              </p>
              <p className="m-0 w-[320px] mx-auto text-center text-[#B2B7C1]">
                Tez orada siz bilan operatorimiz bog’lanib, barcha ma’lumotlarni
                aniqlashtiradi.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SponserRegister;
