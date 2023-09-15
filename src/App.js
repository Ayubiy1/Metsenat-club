import { EllipsisOutlined } from "@ant-design/icons";
import { Divider, Tour } from "antd";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
  useParams,
} from "react-router-dom";
import { Button, Space, DatePicker, version, Radio } from "antd";
import "./App.css";
import RobotTest from "./test-not-bot";
import Menu from "./components/menu/menu";
import { useEffect, useRef, useState } from "react";
import { useLocalStorageState } from "ahooks";
import { useLocale } from "antd/es/locale";
// import { Dashboard } from "./components/menu/admin/sponsers/dashboard";
// Dashboard
import Students from "./components/menu/admin/students/students";
import { Provider } from "react-redux";
import store from "./components/redux/index-redux";
import { Sponsors } from "./components/menu/admin/sponsers/sponsers";
import { RechartsExample } from "./components/menu/admin/dashboard/dashboard";
import Sopnser from "./components/menu/admin/sponser/sponser";
import Sigin from "./components/sigin/sigin";
import { AddStudent } from "./components/menu/admin/students/new-student";
import Student from "./components/menu/admin/students/student";
import SponserRegister from "./components/menu/sponser-register/menu";
import { QueryClient, QueryClientProvider } from "react-query";
import { ContextApi, api } from "./components/data/api";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * (5 * 1000), // 5 mins
      cacheTime: 1 * (5 * 1000), // 10 mins
    },
  },
});

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useLocalStorageState("info", { defaultValue: false });
  const steps = [
    {
      title: "For admins only",
      // description: "Homiy bo'lishlik uchun",
      cover: (
        <img
          alt="tour.png"
          src="https://club.metsenat.uz/img/new-logo.svg"
          // width={"200px"}
          style={{ width: "300px", marginTop: "-20px" }}
        />
      ),
      placement: "right",
      target: () => ref1.current,
    },
    {
      title: "Metsenatlar klubiga aʼzo bo‘lish uchun ariza",
      description: "Homiy bo'lish uchun",
      cover: (
        <img
          alt="tour.png"
          src="https://club.metsenat.uz/img/new-logo.svg"
          // width={"200px"}
          style={{ width: "300px", marginTop: "-20px" }}
        />
      ),
      // placement: "right",
      target: () => ref2.current,
    },
  ];
  const [filter, setFilter] = useState(null);
  const [filter2, setFilter2] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  // console.log(location.pathname);

  useEffect(() => {
    if (open === true) {
      setOpen(true);
    }
  });

  const [activAdmin, setActivAdmin] = useLocalStorageState("activate", {
    defaultValue: false,
  });
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    if (activAdmin === true && location.pathname == "/login") {
      navigate("/admin/dashboard");
    } else if (!activAdmin) {
      navigate("/login");
    }
  }, [activAdmin]);

  const login = () => {
    if (loginName === "admin" && loginPassword === "1234") {
      setActivAdmin(true);
      navigate("/admin/dashboard");
    }
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ContextApi.Provider value={api}>
          <Provider store={store}>
            <Tour
              open={open}
              bottom
              onClose={() => setOpen(false)}
              steps={steps}
            />

            <Routes>
              <Route
                path="admin"
                element={<Menu setActivAdmin={setActivAdmin} login={login} />}
              >
                <Route index element={<RechartsExample />} />
                <Route path="dashboard" element={<RechartsExample />} />
                <Route
                  path="sponsors"
                  element={<Sponsors filter={filter} setFilter={setFilter} />}
                />
                <Route path="sponsors/:id" element={<Sopnser />} />

                <Route
                  path="students"
                  element={<Students filter={filter} setFilter={setFilter} />}
                />
                <Route path="students/:id" element={<Student />} />
              </Route>

              <Route path="/admin/student/new" element={<AddStudent />} />
              <Route path="register" element={<Sigin />} />
              <Route path="register/sponser" element={<SponserRegister />} />

              {/* Login */}
              <Route
                path="/login"
                element={
                  <>
                    <div
                      style={{ height: "99vh" }}
                      className=" flex items-center justify-center w-11/12 mx-auto"
                    >
                      <div className="w-96 mxauto p-10">
                        <div className="flex items-center gap-3">
                          <svg
                            width="255"
                            height="33"
                            viewBox="0 0 255 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M59.4254 0L62.6198 1.31883L88.3516 30.5089C89.2016 31.476 88.5275 33 87.238 33H30.3818L59.4254 0Z"
                              fill="#2044A0"
                            />
                            <path
                              d="M28.7114 32.9707H39.7603L62.7372 6.88721C65.1111 4.22025 63.2061 0 59.6306 0C58.429 0 57.3153 0.498224 56.524 1.40675L28.7114 32.9707Z"
                              fill="#C7DAFF"
                            />
                            <path
                              d="M29.8248 0L33.0193 1.31883L60.9198 32.9707H0.78125L29.8248 0Z"
                              fill="#3366FF"
                            />
                            <path
                              d="M0.752397 32.9707H10.16L33.1369 6.88721C35.4815 4.22025 33.5766 0 30.0011 0C28.7995 0 27.6858 0.498224 26.8945 1.40675L0.19556 31.7398C-0.244049 32.2087 0.107637 32.9707 0.752397 32.9707Z"
                              fill="#C7DAFF"
                            />
                            <path
                              d="M124.412 13.6028L119.371 24.0655H116.089L110.99 13.5735L109.495 26.4101H105.216L107.766 5.71913H111.312L117.701 19.2884L124.031 5.71913H127.636L130.157 26.4101H125.907L124.412 13.6028Z"
                              fill="#28293D"
                            />
                            <path
                              d="M147.36 26.4101H134.113V5.71913H147.096V9.41185H138.304V14.3355H146.012V18.0868H138.304V22.7174H147.389V26.4101H147.36Z"
                              fill="#28293D"
                            />
                            <path
                              d="M159.317 9.41185V26.4101H155.156V9.41185H149.441V5.71913H165.032V9.41185H159.317Z"
                              fill="#28293D"
                            />
                            <path
                              d="M166.732 20.4021H170.894C170.923 21.8674 172.359 23.0983 174.293 23.0983C176.198 23.0983 177.4 22.0726 177.4 20.6072C177.4 19.4936 176.521 18.6436 174.792 18.1161L172.271 17.3834C167.729 16.1818 166.937 13.4269 166.937 11.5806C166.937 7.85856 170.132 5.33813 174.088 5.33813C178.015 5.33813 181.005 7.71202 181.005 11.6392H176.843C176.843 10.1738 175.817 9.03085 174.03 9.03085C172.388 9.03085 171.187 10.0859 171.187 11.4927C171.187 12.0202 171.333 13.046 173.502 13.6907L175.817 14.3648C178.953 15.244 181.679 16.8559 181.679 20.4021C181.679 24.4758 178.162 26.7618 174.264 26.7618C169.78 26.7618 166.732 24.0362 166.732 20.4021Z"
                              fill="#28293D"
                            />
                            <path
                              d="M198.618 26.4101H185.371V5.71913H198.354V9.41185H189.562V14.3355H197.27V18.0868H189.562V22.7174H198.648V26.4101H198.618Z"
                              fill="#28293D"
                            />
                            <path
                              d="M218.078 26.4101H214.327L206.824 13.4269V26.4101H202.663V5.71913H206.531L213.917 18.5557V5.71913H218.078V26.4101Z"
                              fill="#28293D"
                            />
                            <path
                              d="M226.548 21.4571L224.907 26.4101H220.452L228.16 5.71913H232.673L240.352 26.4101H235.956L234.285 21.4571H226.548ZM230.387 10.0566L227.779 17.823H233.025L230.387 10.0566Z"
                              fill="#28293D"
                            />
                            <path
                              d="M248.968 9.41185V26.4101H244.806V9.41185H239.092V5.71913H254.683V9.41185H248.968Z"
                              fill="#28293D"
                            />
                          </svg>
                          <span className="px-2 bg-red-600 text-lime-50 rounded-md">
                            club
                          </span>
                        </div>

                        <div
                          className="bg-white px-5 py-2 mt-8 rounded-lg"
                          ref={ref1}
                        >
                          <div>
                            <h3>Kirish</h3>

                            {/* <form> */}
                            <div className="flex flex-col-reverse">
                              <input
                                type="text"
                                placeholder="admin"
                                className="outline-none mt-2 p-2 text-gray-500 bg-gray-100 border-solid border-2 rounded-lg"
                                onChange={(e) => setLoginName(e.target.value)}
                              />
                              <label
                                style={{
                                  color: "#1D1D1F",
                                  fontFamily: "Rubiks",
                                  fontWeight: "700",
                                  fontSize: "12px",
                                }}
                                className=""
                              >
                                LOGIN
                              </label>
                            </div>

                            <div className="flex flex-col-reverse mt-4">
                              <input
                                type="password"
                                placeholder="1234"
                                className="outline-none mt-2 p-2 text-gray-500 bg-gray-100 border-solid border-2 rounded-lg"
                                onChange={(e) =>
                                  setLoginPassword(e.target.value)
                                }
                              />
                              <label
                                style={{
                                  color: "#1D1D1F",
                                  fontFamily: "Rubiks",
                                  fontWeight: "700",
                                  fontSize: "12px",
                                }}
                                className=""
                              >
                                PAROL
                              </label>
                            </div>
                          </div>
                          {/* <Button onClick={() => navigate("/")} type="primary">
                      Login
                    </Button> */}
                          <RobotTest
                            ref2={ref2}
                            ref1={ref1}
                            login={login}
                            setActivAdmin={setActivAdmin}
                          />

                          {/* </form> */}
                        </div>
                      </div>
                    </div>
                  </>
                }
              ></Route>
            </Routes>
          </Provider>
        </ContextApi.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
