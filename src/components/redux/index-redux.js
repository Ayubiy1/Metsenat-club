import { configureStore } from "@reduxjs/toolkit";
import modalAdd from "./modals";
import StudentsInfoa from "./infoStudenRedux";
import Values from "./slice";
// import SponserR from "../redux/sponser-redux";
import sponsorsR from "../redux/sponsorsT";
import sponsorsT from "../redux/sponsorsT";
import StudentsD from "./new-studentR";
import StudentD from "../redux/new-studentR";

export default configureStore({
  reducer: {
    addStudent: modalAdd,
    studentsInfo: StudentsInfoa,
    value: Values,
    // sponser: SponserR,
    sponsorsT: sponsorsR,
    studentsData: StudentsD,
    StudentD: StudentD,
  },
});
// console.log(sponsorsT);
