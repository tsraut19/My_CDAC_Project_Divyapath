import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Skills } from "./components/Skills";
import { Places } from "./components/Places";
import { AddPlaces } from "./components/AddPlaces";
import { SuperAdminApproval } from "./components/SupeAdminApproval";
import { SuperAdminRevoke } from "./components/SupeAdminRevoke";
import { JobUser } from "./components/JobUser";
import { AddJobAdmin } from "./components/AddJobAdmin";
import { MentalHealthTest } from "./components/MentalHealthTest";
import { GovtSchemes } from "./components/GovtSchemes";
import { MyProfile } from "./components/MyProfile";
import { CourseInfo } from "./components/CourseInfo";
import { CourseInfo1 } from "./components/CourseInfo1";
import { CourseInfo2 } from "./components/CourseInfo2";

import { GrievanSystem } from "./components/GrievanSystem";
import { ViewGrievances } from "./components/ViewGrievances";
import { MyGrievances } from "./components/MyGrievances";

// hindi components
import { Home1 } from "./components/Home1";
import { PlacesH } from "./components/PlacesH";
import { GovtSchemesH } from "./components/GovtSchemesH";
import { GrievanSystemH } from "./components/GrievanSystemH";
import { JobUserH } from "./components/JobUserH";
import { SkillsH } from "./components/SkillsH";
import { CourseInfoH } from "./components/CourseInfoH";
import { MentalHealthTestH } from "./components/MentalHealthTestH";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>

          <Route path="/sign-out" element={<Login></Login>}></Route>
          <Route path="/places" element={<Places></Places>}></Route>
          <Route path="/addplaces" element={<AddPlaces></AddPlaces>}></Route>
          <Route
            path="/add-griev"
            element={<GrievanSystem></GrievanSystem>}></Route>
          <Route
            path="/view-griev"
            element={<ViewGrievances></ViewGrievances>}></Route>

          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route
            path="/super-admin"
            element={<SuperAdminApproval></SuperAdminApproval>}></Route>
          <Route
            path="/super-admin2"
            element={<SuperAdminRevoke></SuperAdminRevoke>}></Route>

          <Route path="/jobs" element={<JobUser></JobUser>}></Route>

          <Route
            path="/add-job-admin"
            element={<AddJobAdmin></AddJobAdmin>}></Route>
          <Route
            path="/mentalhealth"
            element={<MentalHealthTest></MentalHealthTest>}></Route>
          <Route
            path="/govtSchemes"
            element={<GovtSchemes></GovtSchemes>}></Route>
          <Route
            path="/view-my-griev"
            element={<MyGrievances></MyGrievances>}></Route>

          <Route path="/my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/courseinfo" element={<CourseInfo></CourseInfo>}></Route>
          <Route
            path="/courseinfo1"
            element={<CourseInfo1></CourseInfo1>}></Route>
          <Route
            path="/courseinfo2"
            element={<CourseInfo2></CourseInfo2>}></Route>

            {/* hindi components */}

          <Route path="/home1" element={<Home1></Home1>}></Route>
          <Route path="/placesH" element={<PlacesH></PlacesH>}></Route>
          <Route path="/govtSchemesH" element={<GovtSchemesH></GovtSchemesH>}></Route>
          <Route path="/add-grievH" element={<GrievanSystemH></GrievanSystemH>}></Route>
          <Route path="/jobsH" element={<JobUserH></JobUserH>}></Route>
          <Route path="/skillsH" element={<SkillsH></SkillsH>}></Route>
          <Route path="/courseinfoH" element={<CourseInfoH></CourseInfoH>}></Route>
          <Route path="/mentalhealthH" element={<MentalHealthTestH></MentalHealthTestH>}></Route>

        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
