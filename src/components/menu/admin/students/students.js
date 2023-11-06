import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Modal } from "antd";
import { Button, Table } from "antd";
import StudentData from "../../../data/students-data";
import {
  openModalAdd,
  hideModalAdd,
  openModalSNew,
  hideModalSNew,
} from "../../../redux/modals";
import { targetValue } from "../../../redux/slice";
import { setInfo } from "../../../redux/infoStudenRedux";
// console.log(setInfo);

import { UseSelector } from "react-redux/es/hooks/useSelector";
import { SecondaryHeader } from "../Secondary-header";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 mt-10 md:px-16 lg:px-[120px] " + className}>
      {children}
    </div>
  );
};

const Students = ({ filter, setFilter }) => {
  const values = useSelector((store) => store.value.valueStudents);
  const studentD = useSelector((state) => state.studentsData.studentData);

  const navigate = useNavigate();

  const columnsSponsors = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (value, row) => value,
    },
    {
      title: "F.I.SH.",
      dataIndex: "name",
      filteredValue: values,
      key: "name",
    },
    {
      title: "Talabalik turi",
      dataIndex: "typeStudent",
      key: "typeStudent",
    },
    {
      title: "OTM",
      dataIndex: "universitet",
      key: "universitet",
    },
    {
      title: "Ajratilingan summa",
      dataIndex: "allocatedAmount",
      key: "allocatedAmount",
    },
    {
      title: "Kontrakt miqdori",
      dataIndex: "contractAmount",
      key: "contractAmount",
      // render: (value, row) => dayjs(row.date).format("DD.MM.YYYY"),
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
              <path
                opacity="0.4"
                d="M23.855 11.3917C21.5954 6.98292 17.1221 4 12 4C6.87789 4 2.40331 6.985 0.144977 11.3921C0.0496613 11.5806 0 11.7889 0 12.0002C0 12.2115 0.0496613 12.4198 0.144977 12.6083C2.40456 17.0171 6.87789 20 12 20C17.1221 20 21.5966 17.015 23.855 12.6079C23.9503 12.4194 24 12.2111 24 11.9998C24 11.7885 23.9503 11.5802 23.855 11.3917ZM12.0058 18H12C10.4097 17.9992 8.88485 17.3669 7.76077 16.2419C6.63669 15.117 6.00542 13.5917 6.00581 12.0015C6.0062 10.4112 6.6382 8.88618 7.76283 7.76182C8.88746 6.63747 10.4126 6.00583 12.0029 6.00583C13.5932 6.00583 15.1183 6.63747 16.243 7.76182C17.3676 8.88618 17.9996 10.4112 18 12.0015C18.0004 13.5917 17.3691 15.117 16.245 16.2419C15.1209 17.3669 13.5961 17.9992 12.0058 18Z"
                fill="#3366FF"
              />
              <path
                d="M15.8608 13.0363C15.7247 13.5433 15.4899 14.0186 15.1698 14.4347C14.8497 14.8509 14.4506 15.1998 13.9955 15.4614C13.5403 15.7231 13.038 15.8924 12.5173 15.9596C11.9966 16.0268 11.4677 15.9906 10.961 15.853C10.4544 15.7155 9.97979 15.4794 9.56452 15.1581C9.14926 14.8368 8.80147 14.4368 8.54107 13.9809C8.28068 13.525 8.11279 13.0222 8.04704 12.5013C7.98129 11.9805 8.01897 11.4517 8.15791 10.9454C8.54194 11.228 9.01453 11.3636 9.48997 11.3277C9.96541 11.2917 10.4122 11.0865 10.7494 10.7494C11.0865 10.4122 11.2917 9.96542 11.3276 9.48998C11.3636 9.01454 11.228 8.54195 10.9454 8.15792C11.6237 7.96431 12.3412 7.95486 13.0243 8.13054C13.7075 8.30621 14.3314 8.66067 14.8321 9.15747C15.3328 9.65426 15.6922 10.2755 15.8732 10.9572C16.0542 11.6389 16.0504 12.3565 15.8621 13.0363H15.8608Z"
                fill="#3366FF"
              />
            </svg>
          </Button>
        </>
      ),
    },
  ];

  const studentDs = studentD.filter((c) =>
    values !== ""
      ? c.name.toLocaleLowerCase().includes(values.toLocaleLowerCase())
      : c.name
  );

  const filterData = studentDs.filter((i) =>
    filter == null
      ? i
      : filter?.sort == "Barchasi"
      ? i
      : i?.typeStudent == filter?.sort
  );

  return (
    <>
      <Container>
        <SecondaryHeader
          tab={"students"}
          filter={filter}
          setFilter={setFilter}
        />

        <div className=" text-right mb-6">
          <StudentsAddNew />
        </div>
        <Table
          dataSource={filterData}
          columns={columnsSponsors}
          pagination={{
            pageSize: 5,
          }}
          className="w-[1300px] overflow-scroll"
        />
      </Container>
    </>
  );
};

export default Students;

const StudentsAddNew = () => {
  const openSNew = useSelector((store) => store.addStudent.openSNew);
  const navigate = useNavigate();

  return (
    <>
      {/* <Link to={"new"}>+ Talaba qo‘shish</Link> */}
      <Button type="primary" onClick={() => navigate(`/admin/student/new`)}>
        + Talaba qo‘shish
      </Button>
    </>
  );
};
