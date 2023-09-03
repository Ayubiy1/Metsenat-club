import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useStudent } from "../../../hooks/use-student";
import { useMemo } from "react";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { Col, Row, Tag } from "antd";

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 md:px-16 lg:px-[120px] " + className}>{children}</div>
  );
};

const Student = () => {
  const studentData = useSelector((state) => state.StudentD.studentData);
  const { id } = useParams();

  const navigate = useNavigate();

  // const student = studentData.map((s) => (s.id === params.id ? s : null));
  const sponsorIndex = useMemo(
    () => studentData?.find((item) => item?.id == id),
    [studentData]
  );

  return (
    <>
      <div className="bg-[#fff]">
        <Container>
          <div className="flex items-center gap-5">
            <span
              className="cursor-pointer"
              onClick={() => navigate("/admin/students")}
            >
              <ArrowLeftOutlined />
            </span>
            <p className="font-bold" style={{ fontSize: "22px" }}>
              {sponsorIndex?.name}
            </p>
            {/* <Tag color="success">Tasdiqlangan</Tag> */}
          </div>
        </Container>
      </div>

      <div>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 12, offset: 6 }}
          >
            <div className="bg-white shadow-lg mt-10 p-5 rounded-md">
              <div className="flex items-center justify-between mt-[-10px]">
                <p
                  className="font-bold text-[#28293D]"
                  style={{ fontSize: "24px" }}
                >
                  Talaba haqida
                </p>
                <button
                  style={{
                    color: "#3365FC",
                  }}
                  className="px-10 py-3 rounded-lg border-none bg-[#E5EBFF]"
                >
                  <EditOutlined />
                  Tahrirlash
                </button>
              </div>

              <div>
                <div className="flex items-center">
                  <span className="text-[#36F] bg-[#E5EBFF] font-semibold px-2 py-1 rounded-sm">
                    Asosiy ma’lumotlar
                  </span>
                  <span
                    className="p-1 w-[79.5%] p-0"
                    style={{ borderBottom: "2px solid #E4E8F0" }}
                  ></span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span
                    style={{
                      background:
                        "linear-gradient(0deg, #EAECF0 0%, #EAECF0 100%), url(<path-to-image>), lightgray -77.701px 0.63px / 328.762% 164.381% no-repeat;",
                    }}
                  >
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_120_1071)">
                        <path
                          opacity="0.4"
                          d="M11.9594 25.9231L13 21.5L11 18H17L15 21.5L16.0406 25.9231L14 30L11.9594 25.9231ZM14 16C15.5823 16 17.129 15.5308 18.4446 14.6518C19.7602 13.7727 20.7855 12.5233 21.391 11.0615C21.9965 9.59966 22.155 7.99113 21.8463 6.43928C21.5376 4.88743 20.7757 3.46197 19.6569 2.34315C18.538 1.22433 17.1126 0.462403 15.5607 0.153721C14.0089 -0.15496 12.4003 0.00346625 10.9385 0.608967C9.47672 1.21447 8.22729 2.23985 7.34824 3.55544C6.46919 4.87104 6 6.41775 6 8C6 10.1217 6.84285 12.1566 8.34315 13.6569C9.84344 15.1572 11.8783 16 14 16Z"
                          fill="#2E5BFF"
                        />
                        <path
                          d="M19.9875 18.0376L14 30.0001L8.0125 18.0376C3.55625 18.2501 0 21.8938 0 26.4001V29.0001C0 29.7957 0.31607 30.5588 0.87868 31.1214C1.44129 31.684 2.20435 32.0001 3 32.0001H25C25.7956 32.0001 26.5587 31.684 27.1213 31.1214C27.6839 30.5588 28 29.7957 28 29.0001V26.4001C28 21.8938 24.4437 18.2501 19.9875 18.0376Z"
                          fill="#2E5BFF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_120_1071">
                          <rect width="28" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className=" font-semibold">{sponsorIndex?.name}</p>
                </div>

                <div>
                  <p
                    className="text-[#B5B5C3] font-bold m-0 mb-1 mt-2"
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Rubik",
                      fontSize: "11px",
                    }}
                  >
                    telefon raqam
                  </p>
                  <p className="m-0 font-semibold">
                    {sponsorIndex?.phone.length > 9
                      ? sponsorIndex?.phone
                      : "+998 " + sponsorIndex?.phone}
                  </p>
                </div>

                <div className="flex items-center mt-7">
                  <span className="text-[#36F] bg-[#E5EBFF] font-semibold px-2 py-1 rounded-sm">
                    O‘qish joyi haqida ma’lumot
                  </span>
                  <span
                    className="p-1 w-[70%] p-0"
                    style={{ borderBottom: "2px solid #E4E8F0" }}
                  ></span>
                </div>

                <div className="flex items-center flex-wrap w-[100%]">
                  <div className="w-[45%] mt-3">
                    <p
                      className="text-[#B5B5C3] font-bold m-0 mb-1 mt-2"
                      style={{
                        textTransform: "uppercase",
                        fontFamily: "Rubik",
                        fontSize: "11px",
                      }}
                    >
                      OTM
                    </p>
                    <p className="m-0 font-bold text-[#212121]">
                      {sponsorIndex?.universitet}
                    </p>
                  </div>

                  <div className="w-[45%] mt-3">
                    <p
                      className="text-[#B5B5C3] font-bold m-0 mb-1 mt-2"
                      style={{
                        textTransform: "uppercase",
                        fontFamily: "Rubik",
                        fontSize: "11px",
                      }}
                    >
                      Talabalik turi{" "}
                    </p>
                    <p className="m-0 font-bold text-[#212121]">
                      {sponsorIndex?.typeStudent}
                    </p>
                  </div>

                  <div className="w-[45%] mt-3">
                    <p
                      className="text-[#B5B5C3] font-bold m-0 mb-1 mt-2"
                      style={{
                        textTransform: "uppercase",
                        fontFamily: "Rubik",
                        fontSize: "11px",
                      }}
                    >
                      Ajratilingan summa
                    </p>
                    <p className="m-0 font-bold text-[#212121]">
                      {sponsorIndex?.contractAmount}
                    </p>
                  </div>

                  <div className="w-[45%] mt-3">
                    <p
                      className="text-[#B5B5C3] font-bold m-0 mb-1 mt-2"
                      style={{
                        textTransform: "uppercase",
                        fontFamily: "Rubik",
                        fontSize: "11px",
                      }}
                    >
                      Kontrakt miqdori
                    </p>
                    <p className="m-0 font-bold text-[#212121]">
                      {sponsorIndex?.contractAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Student;
