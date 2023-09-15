import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useStudent } from "../../../hooks/use-student";
import { useMemo, useState } from "react";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Row, Table, Tag, Modal, Form, Select, Input } from "antd";
import SponsorsData from "../../../data/sponsors-data";
import { Option } from "antd/es/mentions";
import { OtmData } from "../../../data/otm";
import {
  setEditStudentsData,
  setEditStudentsDataAddSponser,
} from "../../../redux/new-studentR";

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 md:px-16 lg:px-[120px] " + className}>{children}</div>
  );
};

const Student = () => {
  const columnsSponsors = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (value, row) => <p className="m-0 font-semibold">{value}</p>,
    },
    {
      title: "F.I.SH.",
      dataIndex: "fullName",
      key: "fullName",
      render: (value, row) => <p className="m-0 font-semibold">{value}</p>,
    },
    {
      title: "Ajratilingan summa",
      dataIndex: "paid",
      key: "paid",
      render: (value, row) => (
        <span className="text-[#2E384D] font-semibold">
          {Intl.NumberFormat("ru-RU").format(value)} UZS
        </span>
      ),
    },
    {
      title: "Amallar",
      dataIndex: "status",
      key: "status",
      render: (value, row) => (
        <>
          <Button
            onClick={() => {
              navigate(`/admin/students/${row.id}`);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_31_1994)">
                <path
                  d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
                  stroke="#3467FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 15H12L20.5 6.49998C20.8978 6.10216 21.1213 5.56259 21.1213 4.99998C21.1213 4.43737 20.8978 3.89781 20.5 3.49998C20.1022 3.10216 19.5626 2.87866 19 2.87866C18.4374 2.87866 17.8978 3.10216 17.5 3.49998L9 12V15Z"
                  stroke="#3467FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 5L19 8"
                  stroke="#3467FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_1994">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </>
      ),
    },
  ];
  const data = useSelector((state) => state?.sponsorsT?.sponsors);

  const [top, setTop] = useState("none");
  const [bottom, setBottom] = useState("none");

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

  const [isModalOpenEditS, setIsModalOpenEditS] = useState(false);
  const showModalEditS = () => {
    setIsModalOpenEditS(true);
  };
  const handleCancelEditS = () => {
    setIsModalOpenEditS(false);
  };

  const dispatch = useDispatch();

  const studentData = useSelector((state) => state.StudentD.studentData);
  const { id } = useParams();

  const navigate = useNavigate();

  const sponsorIndex = useMemo(
    () => studentData?.find((item) => item?.id == id),
    [studentData]
  );
  const a = sponsorIndex?.sponses?.map((item) => item);

  const f = data.map((i) => i);
  // console.log(f);

  const studentIndex = useMemo(
    () => studentData?.findIndex((item) => item?.id == id),
    [studentData, id]
  );

  const onfinish = (value) => {
    const newData = {
      name:
        value.name === undefined || value.name === ""
          ? sponsorIndex.name
          : value.name,
      universitet:
        value.universitet === undefined || value.universitet === ""
          ? sponsorIndex.universitet
          : value.universitet,
      phone:
        value.phone === undefined || +value.phone === ""
          ? +sponsorIndex.phone
          : value.phone,
      contractAmount:
        value.contractAmount === undefined || value.contractAmount === ""
          ? sponsorIndex.contractAmount
          : value.contractAmount,
      id: sponsorIndex?.id,
      typeStudent: sponsorIndex?.typeStudent,
      allocatedAmount: sponsorIndex?.allocatedAmount,
      phone: sponsorIndex?.phone,
      sponses: sponsorIndex?.sponses,
    };

    //  [
    //   {
    //     id: 1,
    //     fullName: "Alimov Abror Xabibullayevich",
    //     paid: 10000000,
    //   },
    // ],

    dispatch(setEditStudentsData({ newData, index: studentIndex }));
  };

  const newSponserS = (value) => {
    // console.log("a");
    const a = sponsorIndex?.sponses?.map((i) => i.id);

    const newData = {
      id: Math.floor(Math.max(...a)) + 1,
      ...value,
    };

    dispatch(setEditStudentsDataAddSponser({ newData, index: studentIndex }));

    console.log(newData);
  };
  // console.log(sponsorIndex?.sponses);

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
                  className="px-10 py-3 rounded-lg border-none cursor-pointer bg-[#E5EBFF]"
                  onClick={showModalEditS}
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
                      {sponsorIndex?.allocatedAmount}
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

            <div className="my-10 bg-white p-2 rounded-md">
              <div className="m-2 flex items-center justify-between">
                <h2>Talabaga homiylar</h2>

                <button
                  className="bg-[#E5EBFF] text-[#3365FC] text-[15px]  px-7 py-4 rounded-lg border-0 cursor-pointer"
                  onClick={showModal}
                >
                  + Homiy qo‘shish
                </button>
              </div>
              <Table
                dataSource={a}
                columns={columnsSponsors}
                hideOnSinglePage={false}
                pagination={{ position: [top, bottom] }}
              />
            </div>
            <Modal
              title="Homiy qo‘shish"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={false}
            >
              <div
                className="pt-10 mt-4"
                style={{ borderTop: "2px solid #F5F5F7" }}
              >
                <Form onFinish={newSponserS}>
                  <Form.Item
                    name={"fullName"}
                    label={"OTM"}
                    rules={[{ required: true, message: "OTM ni tanlang" }]}
                  >
                    <Select
                      style={{ width: "100%" }}
                      defaultValue={"Homiyni tanlang"}
                      allowClear
                    >
                      {data.map((item) => (
                        <>
                          <Option value={item.fullName}>{item.fullName}</Option>
                        </>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name={"paid"}
                    label="Ajratilingan summa"
                    rules={[{ required: true, message: "Ajratilingan summa" }]}
                  >
                    <Input type="number" placeholder="Summani kiriting" />
                  </Form.Item>

                  <Form.Item>
                    <Button htmlType="submit">Add</Button>
                  </Form.Item>
                </Form>
              </div>
            </Modal>

            <Modal
              title="Basic Modal"
              open={isModalOpenEditS}
              onOk={handleCancelEditS}
              onCancel={handleCancelEditS}
              footer={false}
            >
              {" "}
              <Form
                layout="vertical"
                className="w-[90%] mt-5 mx-auto"
                onFinish={onfinish}
              >
                <Form.Item
                  className=""
                  label="F.I.Sh. (Familiya Ism Sharifingiz)"
                  name={"name"}
                >
                  <Input placeholder={sponsorIndex?.name} />
                </Form.Item>

                <Form.Item className="" label="Telefon raqam" name={"phone"}>
                  <Input placeholder={sponsorIndex?.phone} />
                </Form.Item>

                <Form.Item name={"universitet"} label={"OTM"}>
                  <Select
                    style={{ width: "100%" }}
                    defaultValue={sponsorIndex?.universitet}
                    options={OtmData}
                    allowClear
                  />
                </Form.Item>

                <Form.Item
                  className=""
                  label="Telefon raqam"
                  name={"contractAmount"}
                >
                  <Input
                    placeholder={
                      Intl.NumberFormat("ru-Ru").format(
                        sponsorIndex?.contractAmount
                      ) + " UZS"
                    }
                  />
                </Form.Item>

                <Form.Item className="hover:text-[#fff]">
                  <Button
                    className="bg-blue-500 text-white font-bold hover:text-[#fff]"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Student;
