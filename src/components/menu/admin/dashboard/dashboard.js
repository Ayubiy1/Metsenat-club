import { Tooltip } from "antd";
import { Legend } from "chart.js";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { SecondaryHeader } from "../Secondary-header";

const data = [
  {
    name: "yanvar",
    countSponsors: 2000,
    countStudents: 4000,
  },
  {
    name: "fevral",
    countSponsors: 3000,
    countStudents: 2000,
  },
  {
    name: "mart",
    countSponsors: 1000,
    countStudents: 2000,
  },
  {
    name: "aprel",
    countSponsors: 5000,
    countStudents: 3000,
  },
  {
    name: "may",
    countSponsors: 3500,
    countStudents: 2100,
  },
  {
    name: "iyun",
    countSponsors: 3450,
    countStudents: 1150,
  },
  {
    name: "iyul",
    countSponsors: 2000,
    countStudents: 4400,
  },
  {
    name: "avgust",
    countSponsors: 1000,
    countStudents: 3000,
  },
  {
    name: "sentabr",
    countSponsors: 3200,
    countStudents: 5800,
  },
  {
    name: "oktabr",
    countSponsors: 1000,
    countStudents: 3000,
  },
  {
    name: "noyabr",
    countSponsors: 1400,
    countStudents: 3100,
  },
  {
    name: "dekabr",
    countSponsors: 2700,
    countStudents: 5000,
  },
];

const Container = ({ children, className }) => {
  return (
    <div className={"px-3 mt-10 md:px-16 lg:px-[120px] " + className}>
      {children}
    </div>
  );
};

export const RechartsExample = () => {
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
