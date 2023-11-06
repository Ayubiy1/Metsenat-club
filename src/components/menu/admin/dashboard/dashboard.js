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

  const JamiTolanganSumma = Students.reduce((acc, item) => {
    const paid = item?.sponses.reduce((acca, i) => acca + i?.paid, 0);
    return acc + paid;
  }, 0);

  const JamiSoralganSumma = Students.reduce(
    (acc, i) => acc + i.allocatedAmount,
    0
  );

  return (
    <div>
      <Container>
        <SecondaryHeader tab={"dashboard"} />

        <div className="flex flex-wrap gap-10 items-center justify-center xl:justify-between">
          <div className="flex items-center gap-4 p-2 px-5 rounded-md bg-[#fff]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="48"
                height="48"
                rx="12"
                fill="#4C6FFF"
                fill-opacity="0.1"
              />
              <path
                d="M23.9997 19.8242C22.0669 19.8242 20.4998 21.7124 20.4998 24.042C20.4998 26.3712 22.0665 28.2599 23.9997 28.2599C25.9321 28.2599 27.4997 26.3721 27.4997 24.042C27.4997 21.7124 25.9326 19.8242 23.9997 19.8242ZM37.1752 15.1828C35.4782 14.471 33.7798 14.2002 32.0824 14.2002C26.6938 14.1998 21.3057 16.9275 15.9171 16.9275C14.5657 16.9275 13.2151 16.7561 11.8637 16.3273C11.7119 16.2792 11.5597 16.2564 11.4109 16.2564C10.658 16.2564 10 16.8392 10 17.6481V31.528C10 32.0805 10.3163 32.6042 10.8242 32.8168C12.5213 33.529 14.2196 33.7998 15.9171 33.7998C21.3057 33.7998 26.6942 31.0721 32.0828 31.0721C33.4342 31.0721 34.7848 31.2436 36.1362 31.6723C36.288 31.7204 36.4402 31.7432 36.589 31.7432C37.3419 31.7432 37.9999 31.1605 37.9999 30.3515V16.4721C37.9995 15.9191 37.6831 15.3959 37.1752 15.1828ZM35.8995 26.8897C34.7231 27.0384 33.7742 27.9095 33.5204 29.0544C33.0479 29.0141 32.5772 28.9721 32.0824 28.9721C29.1267 28.9721 26.2581 29.6979 23.4844 30.4001C20.8437 31.0686 18.3495 31.6999 15.9171 31.6999C15.5662 31.6999 15.2236 31.6859 14.8885 31.6588C14.8264 30.1612 13.6071 28.9634 12.1004 28.9634V21.2303C13.4597 21.2303 14.591 20.2569 14.8452 18.9663C15.2013 18.9886 15.5487 19.0275 15.9175 19.0275C18.8732 19.0275 21.7414 18.3017 24.5151 17.5995C27.1554 16.9315 29.6495 16.3002 32.0824 16.3002C32.5566 16.3002 33.0107 16.3343 33.457 16.3837C33.4942 17.782 34.545 18.9142 35.8995 19.0857V26.8897Z"
                fill="#4C6FFF"
              />
            </svg>
            <div>
              <p
                className="m-0 text-[#7A7A9D] text-[12px]"
                style={{ fontFamily: "Rubik" }}
              >
                Jami to‘langan summa
              </p>
              <h2 className="m-0 text-[#2E384D]">
                {Intl.NumberFormat("ru-Ru").format(JamiTolanganSumma)} UZS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 px-5 rounded-md bg-[#fff]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="48"
                height="48"
                rx="12"
                fill="#EDC700"
                fill-opacity="0.1"
              />
              <path
                d="M23.9997 19.8242C22.0669 19.8242 20.4998 21.7124 20.4998 24.042C20.4998 26.3712 22.0665 28.2599 23.9997 28.2599C25.9321 28.2599 27.4997 26.3721 27.4997 24.042C27.4997 21.7124 25.9326 19.8242 23.9997 19.8242ZM37.1752 15.1828C35.4782 14.471 33.7798 14.2002 32.0824 14.2002C26.6938 14.1998 21.3057 16.9275 15.9171 16.9275C14.5657 16.9275 13.2151 16.7561 11.8637 16.3273C11.7119 16.2792 11.5597 16.2564 11.4109 16.2564C10.658 16.2564 10 16.8392 10 17.6481V31.528C10 32.0805 10.3163 32.6042 10.8242 32.8168C12.5213 33.529 14.2196 33.7998 15.9171 33.7998C21.3057 33.7998 26.6942 31.0721 32.0828 31.0721C33.4342 31.0721 34.7848 31.2436 36.1362 31.6723C36.288 31.7204 36.4402 31.7432 36.589 31.7432C37.3419 31.7432 37.9999 31.1605 37.9999 30.3515V16.4721C37.9995 15.9191 37.6831 15.3959 37.1752 15.1828ZM35.8995 26.8897C34.7231 27.0384 33.7742 27.9095 33.5204 29.0544C33.0479 29.0141 32.5772 28.9721 32.0824 28.9721C29.1267 28.9721 26.2581 29.6979 23.4844 30.4001C20.8437 31.0686 18.3495 31.6999 15.9171 31.6999C15.5662 31.6999 15.2236 31.6859 14.8885 31.6588C14.8264 30.1612 13.6071 28.9634 12.1004 28.9634V21.2303C13.4597 21.2303 14.591 20.2569 14.8452 18.9663C15.2013 18.9886 15.5487 19.0275 15.9175 19.0275C18.8732 19.0275 21.7414 18.3017 24.5151 17.5995C27.1554 16.9315 29.6495 16.3002 32.0824 16.3002C32.5566 16.3002 33.0107 16.3343 33.457 16.3837C33.4942 17.782 34.545 18.9142 35.8995 19.0857V26.8897Z"
                fill="#EDC700"
              />
            </svg>
            <div>
              <p
                className="m-0 text-[#7A7A9D] text-[12px]"
                style={{ fontFamily: "Rubik" }}
              >
                Jami so‘ralgan summa
              </p>
              <h2 className="m-0 text-[#2E384D]">
                {Intl.NumberFormat("ru-Ru").format(JamiSoralganSumma)} UZS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 px-5 rounded-md bg-[#fff]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="48"
                height="48"
                rx="12"
                fill="#ED7200"
                fill-opacity="0.1"
              />
              <path
                d="M23.9997 19.8242C22.0669 19.8242 20.4998 21.7124 20.4998 24.042C20.4998 26.3712 22.0665 28.2599 23.9997 28.2599C25.9321 28.2599 27.4997 26.3721 27.4997 24.042C27.4997 21.7124 25.9326 19.8242 23.9997 19.8242ZM37.1752 15.1828C35.4782 14.471 33.7798 14.2002 32.0824 14.2002C26.6938 14.1998 21.3057 16.9275 15.9171 16.9275C14.5657 16.9275 13.2151 16.7561 11.8637 16.3273C11.7119 16.2792 11.5597 16.2564 11.4109 16.2564C10.658 16.2564 10 16.8392 10 17.6481V31.528C10 32.0805 10.3163 32.6042 10.8242 32.8168C12.5213 33.529 14.2196 33.7998 15.9171 33.7998C21.3057 33.7998 26.6942 31.0721 32.0828 31.0721C33.4342 31.0721 34.7848 31.2436 36.1362 31.6723C36.288 31.7204 36.4402 31.7432 36.589 31.7432C37.3419 31.7432 37.9999 31.1605 37.9999 30.3515V16.4721C37.9995 15.9191 37.6831 15.3959 37.1752 15.1828ZM35.8995 26.8897C34.7231 27.0384 33.7742 27.9095 33.5204 29.0544C33.0479 29.0141 32.5772 28.9721 32.0824 28.9721C29.1267 28.9721 26.2581 29.6979 23.4844 30.4001C20.8437 31.0686 18.3495 31.6999 15.9171 31.6999C15.5662 31.6999 15.2236 31.6859 14.8885 31.6588C14.8264 30.1612 13.6071 28.9634 12.1004 28.9634V21.2303C13.4597 21.2303 14.591 20.2569 14.8452 18.9663C15.2013 18.9886 15.5487 19.0275 15.9175 19.0275C18.8732 19.0275 21.7414 18.3017 24.5151 17.5995C27.1554 16.9315 29.6495 16.3002 32.0824 16.3002C32.5566 16.3002 33.0107 16.3343 33.457 16.3837C33.4942 17.782 34.545 18.9142 35.8995 19.0857V26.8897Z"
                fill="#ED7200"
              />
            </svg>
            <div>
              <p
                className="m-0 text-[#7A7A9D] text-[12px]"
                style={{ fontFamily: "Rubik" }}
              >
                To‘lanishi kerak summa{" "}
              </p>
              <h2 className="m-0 text-[#2E384D]">
                {Intl.NumberFormat("ru-Ru").format(
                  JamiSoralganSumma - JamiTolanganSumma
                )}{" "}
                UZS
              </h2>
            </div>
          </div>
        </div>

        <div className="w-[100%] overflow-scroll">
          <LineChart className="mt-8" width={1200} height={400} data={data}>
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
        </div>
      </Container>
    </div>
  );
};
