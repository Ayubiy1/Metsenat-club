import { Tooltip } from "antd";
import { Legend } from "chart.js";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { SecondaryHeader } from "../Secondary-header";
import { useSelector } from "react-redux";

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 mt-10 md:px-16 lg:px-[120px] " + className}>
      {children}
    </div>
  );
};

export const RechartsExample = () => {
  const Sponsers = useSelector((state) => state.sponsorsT.sponsors);
  const Students = useSelector((state) => state?.studentsData?.studentData);

  const data = [
    {
      name: "yanvar",
      countSponsors: 120,
      countStudents: 240,
    },
    {
      name: "fevral",
      countSponsors: 123,
      countStudents: 251,
    },
    {
      name: "mart",
      countSponsors: 231,
      countStudents: 458,
    },
    {
      name: "aprel",
      countSponsors: 137,
      countStudents: 264,
    },
    {
      name: "may",
      countSponsors: 139,
      countStudents: 269,
    },
    {
      name: "iyun",
      countSponsors: 145,
      countStudents: 275,
    },
    {
      name: "iyul",
      countSponsors: 131,
      countStudents: 178,
    },
    {
      name: "avgust",
      countSponsors: 160,
      countStudents: 290,
    },
    {
      name: "sentabr",
      countSponsors: 175,
      countStudents: 450,
    },
    {
      name: "oktabr",
      countSponsors: 180,
      countStudents: 450,
    },
    {
      name: "noyabr",
      countSponsors: 199,
      countStudents: 520,
    },
    {
      name: "dekabr",
      countSponsors: Sponsers.length,
      countStudents: Students.length,
    },
  ];

  return (
    <div>
      <Container>
        <SecondaryHeader tab={"dashboard"} />

        <LineChart
          className="mx-auto  mt-8"
          width={1200}
          height={400}
          data={data}
        >
          <Line
            type="monotone"
            dataKey="countSponsors"
            stroke="#4C6FFF"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="countStudents"
            stroke="#FF92AE"
            strokeWidth={3}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </Container>
    </div>
  );
};
