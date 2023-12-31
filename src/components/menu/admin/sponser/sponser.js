import { useDispatch, useSelector } from "react-redux";
import { useSponsor } from "../../../hooks/use-sponsor";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  Tag,
  Typography,
  message,
} from "antd";
import { useContext, useMemo, useState } from "react";
import { sponsorStatuses, sponsorSumma } from "../../../data/sponsors-status";
import { useNavigate, useParams } from "react-router";
import { ContextApi } from "../../../data/api";
import { useMutation, useQueryClient } from "react-query";
import { setEditSponserData } from "../../../redux/new-studentR";
import styled from "styled-components";
const { Title } = Typography;

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 md:px-16 lg:px-[120px] " + className}>{children}</div>
  );
};

const Sopnser = () => {
  const [sponsorsI, sponsorIndex] = useSponsor();
  const state = useSelector((state) => state.studentsData.sponserIndex);

  const navigate = useNavigate();
  return (
    <SponsorWrapper>
      <div className="parent">
        <div className="bg-[#fff]">
          <Container>
            <div className="flex items-center gap-5">
              <span
                className="cursor-pointer"
                onClick={() => navigate("/admin/sponsors")}
              >
                <ArrowLeftOutlined />
              </span>
              <p>{sponsorsI?.fullName}</p>
              <Tag
                color={
                  (sponsorsI?.status == "Yangi" && "processing") ||
                  (sponsorsI?.status == "Moderatsiyada" && "warning") ||
                  (sponsorsI?.status == "Bekor qilingan" && "error") ||
                  (sponsorsI?.status == "Tasdiqlangan" && "success")
                }
              >
                {sponsorsI?.status}
              </Tag>
            </div>
          </Container>
        </div>

        <div>
          <Container className={"py-10 bg-[#f5f5f7] min-h-[400px]"}>
            <Row>
              <Col
                xs={{ span: 20, offset: 2 }}
                md={{ span: 18, offset: 4 }}
                xl={{ span: 12, offset: 6 }}
              >
                <div className={"py-7 px-3 bg-white shadow rounded-lg"}>
                  <div className={"flex items-center justify-between"}>
                    <Title level={5} className={"m-0"}>
                      Homiy haqida
                    </Title>
                    <Modalss />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 info-name">
                      <div className="bg-[#E0E7FF] w-[65px] h-[65px] flex items-center justify-center rounded-md">
                        <svg
                          width="28"
                          height="32"
                          viewBox="0 0 28 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_26_187)">
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
                            <clipPath id="clip0_26_187">
                              <rect width="28" height="32" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <Typography className="font-bold">
                        {sponsorsI?.fullName}
                      </Typography>
                    </div>

                    <div className="max-w-[450px] sm:flex items-center justify-between mt-5">
                      <div>
                        <Typography
                          className="text-[#B5B5C3] font-semibold"
                          style={{ textTransform: "uppercase" }}
                        >
                          telefon raqam
                        </Typography>
                        <Typography className=" font-bold">
                          {sponsorsI?.phone}
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          className="text-[#B5B5C3] font-semibold"
                          style={{ textTransform: "uppercase" }}
                        >
                          Homiylik summasi
                        </Typography>
                        <Typography className=" font-bold">
                          {Intl.NumberFormat("ru-RU").format(
                            sponsorsI?.sponsorSum
                          )}{" "}
                          so'm
                        </Typography>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </SponsorWrapper>
  );
};
export default Sopnser;

const SponsorWrapper = styled.div`
  @media screen and (max-width: 415px) {
    .info-name {
      display: block;
    }
  }
`;

export const Modalss = ({}) => {
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.success("Homiy ma'lumotlari o'zgartirildi");
  };

  const queryClient = useQueryClient();
  const api = useContext(ContextApi);

  const mutation = useMutation(
    (data) => {
      return api.put(`/sponsors/${id}`, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("sponsors");
      },
    }
  );

  const state = useSelector((state) => state.sponsorsT.sponsors);
  const sponsorsDataa = useSelector((state) => state.StudentD.sponsorsData);

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sponsorsI, sponsorIndex] = useSponsor();

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const studentIndex = useMemo(
    () => sponsorsDataa?.findIndex((item) => item?.id == id),
    [id]
  );
  console.log(studentIndex);

  const onFinish = (values) => {
    const newData = {
      ...values,
      paid: sponsorsI?.paid,
      id: sponsorsI?.id,
    };
    dispatch(setEditSponserData({ newData, index: studentIndex }));
    info();
    handleCancel();
  };

  return (
    <>
      {contextHolder}
      <Button
        type="primary"
        onClick={() => {
          showModal();
        }}
      >
        <EditOutlined /> Tahrirlash
      </Button>
      <Modal
        title="Modala"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="absolutetop-[5%] left-[1%] sm:relative"
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            ...sponsorsI,
          }}
          onFinish={onFinish}
        >
          <Form.Item label="" className="w-full" name="type">
            <Radio.Group className="w-[100%]">
              <Radio.Button
                className="w-[100%] text-center sm:w-[50%]"
                value="jismoniy"
              >
                Jismoniy shaxs
              </Radio.Button>
              <Radio.Button
                className="w-[100%] text-center sm:w-[50%]"
                value="yuridik"
              >
                Yuridik shaxs
              </Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="F.I.Sh. (Familiya Ism Sharifingiz)"
            rules={[
              {
                required: true,
                message:
                  "F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak",
              },
            ]}
            tooltip="F.I.Sh. (Familiya Ism Sharifingiz) ni kiritishingiz kerak"
            name={"fullName"}
          >
            <Input placeholder={sponsorsI?.fullName} />
          </Form.Item>

          <Form.Item
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
            <Input value={sponsorsI?.phone} />
          </Form.Item>

          <Form.Item
            name={"status"}
            label={"Holati"}
            rules={[{ required: true, message: "Holatini tanlang" }]}
          >
            <Select
              options={sponsorStatuses}
              style={{ width: "100%" }}
              allowClear
            />
          </Form.Item>

          <Form.Item
            name={"sponsorSum"}
            label={"Homiylik summasi"}
            rules={[
              { required: true, message: "Homiylik summasi kiritilmadi" },
            ]}
          >
            <Select
              options={sponsorSumma}
              style={{ width: "100%" }}
              allowClear
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
    </>
  );
};
