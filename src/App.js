import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./features/posts/postSlice";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

const AddCategoriesPage = React.lazy(() =>
  import("./pages/categories/AddCategoriesPage")
);
const Animepage = React.lazy(() => import("./pages/art/Animepage"));
const Art = React.lazy(() => import("./pages/art/Art"));
const Doodlepage = React.lazy(() => import("./pages/art/Doodlepage"));
const Painting = React.lazy(() => import("./pages/art/Painting"));
const Sketchespage = React.lazy(() => import("./pages/art/Sketchespage"));
const Surreatpage = React.lazy(() => import("./pages/art/Surreatpage"));
const Beauty = React.lazy(() => import("./pages/beauty/Beauty"));
const Beautyblogger = React.lazy(() => import("./pages/beauty/Beautyblogger"));
const Makeuppage = React.lazy(() => import("./pages/beauty/makeupPage"));
const SalonPage = React.lazy(() => import("./pages/beauty/SalonPage"));
const Skinpage = React.lazy(() => import("./pages/beauty/Skinpage"));
const ExercisePage = React.lazy(() =>
  import("./pages/lifestylepage/exercisePage")
);
const Lifestyle = React.lazy(() => import("./pages/lifestylepage/Lifestyle"));
const Asianpage = React.lazy(() => import("./pages/entertainment/Asianpage"));
const Cartoonpage = React.lazy(() =>
  import("./pages/entertainment/Cartoonpage")
);
const Cinemapage = React.lazy(() => import("./pages/entertainment/Cinemapage"));
const Entertainment = React.lazy(() =>
  import("./pages/entertainment/Entertainment")
);
const Koreanpage = React.lazy(() => import("./pages/entertainment/Koreanpage"));
const Moviepage = React.lazy(() => import("./pages/entertainment/Moviepage"));
const Music = React.lazy(() => import("./pages/entertainment/Music"));
const Myanmar = React.lazy(() => import("./pages/entertainment/Myanmar"));
const DetailPage = React.lazy(() => import("./pages/detailpage/DetailPage"));
const Business = React.lazy(() => import("./pages/business/Business"));
const Education = React.lazy(() => import("./pages/education/Education"));
const University = React.lazy(() => import("./pages/education/University"));
const Government = React.lazy(() => import("./pages/government/Govenment"));
const Law = React.lazy(() => import("./pages/government/Law"));
const Leader = React.lazy(() => import("./pages/government/Leader"));
const Ministry = React.lazy(() => import("./pages/government/Ministry"));
const Passport = React.lazy(() => import("./pages/government/Passport"));
const Police = React.lazy(() => import("./pages/government/Police"));
const Culture = React.lazy(() => import("./pages/history/Culture"));
const Dress = React.lazy(() => import("./pages/history/Dress"));
const Dynasty = React.lazy(() => import("./pages/history/Dynasty"));
const History = React.lazy(() => import("./pages/history/History"));
const Region = React.lazy(() => import("./pages/history/Region"));
const Religous = React.lazy(() => import("./pages/history/Religous"));
// import Home from "./pages/home/Home";

const ComedyPage = React.lazy(() => import("./pages/literature/ComedyPage"));
const DramaPage = React.lazy(() => import("./pages/literature/DramaPage"));
const FictionPage = React.lazy(() => import("./pages/literature/FictionPage"));
const LiteraturePage = React.lazy(() =>
  import("./pages/literature/LiteraturePage")
);
const NovelPage = React.lazy(() => import("./pages/literature/NovelPage"));
const PoetryPage = React.lazy(() => import("./pages/literature/PoetryPage"));
const RomancePage = React.lazy(() => import("./pages/literature/RomancePage"));
const ShortstoryPage = React.lazy(() =>
  import("./pages/literature/ShortstoryPage")
);
const PostformPage = React.lazy(() => import("./pages/post/PostformPage"));
const AstronomyPage = React.lazy(() => import("./pages/science/AstronomyPage"));
const BilologyPage = React.lazy(() => import("./pages/science/BilologyPage"));
const ChemistryPage = React.lazy(() => import("./pages/science/ChemistryPage"));
const EarthSciencePage = React.lazy(() =>
  import("./pages/science/EarthSciencePage")
);
const MammalsPage = React.lazy(() => import("./pages/science/MammalsPage"));
const PhysicsPage = React.lazy(() => import("./pages/science/PhysicsPage"));
const PlantsPage = React.lazy(() => import("./pages/science/PlantsPage"));
const SciencePage = React.lazy(() => import("./pages/science/SciencePage"));
const Boxingpage = React.lazy(() => import("./pages/sport/Boxingpage"));
const Caneballpage = React.lazy(() => import("./pages/sport/Caneballpage"));
const Chesspage = React.lazy(() => import("./pages/sport/Chesspage"));
const Footballpage = React.lazy(() => import("./pages/sport/Footballpage"));
const Gammingpage = React.lazy(() => import("./pages/sport/Gammingpage"));
const Sport = React.lazy(() => import("./pages/sport/Sport"));
const ComputerPage = React.lazy(() => import("./pages/tecnology/ComputerPage"));
const ElectronicPage = React.lazy(() =>
  import("./pages/tecnology/ElectronicPage")
);
const InnovationPage = React.lazy(() =>
  import("./pages/tecnology/InnovationPage")
);
const SmartphonePage = React.lazy(() =>
  import("./pages/tecnology/SmartphonePage")
);
const SoftwarePage = React.lazy(() => import("./pages/tecnology/SoftwarePage"));
const TecnologyPages = React.lazy(() =>
  import("./pages/tecnology/TecnologyPage")
);

const Advanture = React.lazy(() => import("./pages/travelling/Advanture"));
const Beach = React.lazy(() => import("./pages/travelling/Beach"));
const Mountain = React.lazy(() => import("./pages/travelling/Mountain"));
const Pagoda = React.lazy(() => import("./pages/travelling/Pagoda"));
const Travel = React.lazy(() => import("./pages/travelling/Travel"));
const Waterfall = React.lazy(() => import("./pages/travelling/Waterfall"));
const FamilyPage = React.lazy(() => import("./pages/lifestylepage/familyPage"));
const LuxuryPage = React.lazy(() => import("./pages/lifestylepage/luxuryPage"));
const ModernPage = React.lazy(() => import("./pages/lifestylepage/modernPage"));
const HealthyLifePage = React.lazy(() =>
  import("./pages/lifestylepage/healthyPage")
);
const BeautyClinicpage = React.lazy(() => import("./pages/beauty/Clinicpage"));
const Healthpage = React.lazy(() => import("./pages/healthpage/HealthPage"));
const HealthClinicPage = React.lazy(() =>
  import("./pages/healthpage/HealthClinicPage")
);
const Hfoodspage = React.lazy(() => import("./pages/healthpage/HfoodsPage"));
const InfodoctorPage = React.lazy(() =>
  import("./pages/healthpage/InfodoctorPage")
);
const MedicinePage = React.lazy(() =>
  import("./pages/healthpage/MedicinePage")
);
const Yogapage = React.lazy(() => import("./pages/healthpage/YogaPage"));
const LoginandRegister = React.lazy(() =>
  import("./pages/loginPage/LoginPage")
);
const UpdateformPage = React.lazy(() => import("./pages/post/UpdateformPage"));
const RequestFormPage = React.lazy(() =>
  import("./pages/adminPage/RequestFormPage")
);
const AdminPage = React.lazy(() => import("./pages/adminPage/AdminPage"));
const AdmindetailPage = React.lazy(() =>
  import("./pages/adminDetail/AdminDetailPage")
);
// import SearchPage from "./pages/searchpage/SearchPage";
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const Aboutpage = React.lazy(() => import("./pages/aboutus/Aboutpage"));
const UsereditForm = React.lazy(() => import("./pages/profile/userEditForm"));

const LazyHome = React.lazy(() => import("./pages/home/Home"));
const LazySearch = React.lazy(() => import("./pages/searchpage/SearchPage"));
const UserDetailPage = React.lazy(() =>
  import("./pages/userdetailPage/UserDetailPage")
);
// const DetailWithCount = React.lazy(() =>
//   import("./pages/userdetailPage/DetailWithCount")
// );

function App() {
  const dispatch = useDispatch();
  const [getAlluserApp, setGetAllusers] = useState();
  const [getAllpostApp, setGetAllposts] = useState();
  const { posts, isError, message } = useSelector((state) => state.posts);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getPosts());
  }, [isError, message, dispatch]);

  useEffect(() => {
    const getAlldata = async () => {
      const reqdata = await fetch(`http://localhost:8080/api/post`);
      const res = await reqdata.json(); // JSON.parse(json);
      //   console.log("res data is ", res);
      return res;
    };
    getAlldata().then((data) => {
      setGetAllposts(data);
    });
  }, []);

  useEffect(() => {
    const getAllusers = async () => {
      const reqdata = await fetch(`http://localhost:8080/api/users/alluser`);
      const res = await reqdata.json(); // JSON.parse(json);
      //   console.log("res data is ", res);
      return res;
    };
    getAllusers().then((data) => {
      setGetAllusers(data);
    });
  }, []);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      id={darkMode ? "blackMode" : "whiteMode"}
      style={{
        background: darkMode ? "#1a1a1a" : "white",
        color: darkMode ? "white" : "#1a1a1a",
      }}
    >
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading....">
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <React.Suspense fallback="Loading....">
              <Profile />
            </React.Suspense>
          }
        />

        <Route
          path="/travel"
          element={
            <React.Suspense fallback="Loading....">
              <Travel />
            </React.Suspense>
          }
        />
        <Route
          path="/beauty"
          element={
            <React.Suspense fallback="Loading....">
              <Beauty />
            </React.Suspense>
          }
        />
        <Route
          path="/entertainment"
          element={
            <React.Suspense fallback="Loading....">
              <Entertainment />
            </React.Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <React.Suspense fallback="Loading....">
              <TecnologyPages />
            </React.Suspense>
          }
        />

        <Route
          path="/sports"
          element={
            <React.Suspense fallback="Loading....">
              <Sport />
            </React.Suspense>
          }
        />
        <Route
          path="/football"
          element={
            <React.Suspense fallback="Loading....">
              <Footballpage />
            </React.Suspense>
          }
        />
        <Route
          path="/boxing"
          element={
            <React.Suspense fallback="Loading....">
              <Boxingpage />
            </React.Suspense>
          }
        />
        <Route
          path="/chess"
          element={
            <React.Suspense fallback="Loading....">
              <Chesspage />
            </React.Suspense>
          }
        />
        <Route
          path="/cane"
          element={
            <React.Suspense fallback="Loading....">
              <Caneballpage />
            </React.Suspense>
          }
        />
        <Route
          path="/gamming"
          element={
            <React.Suspense fallback="Loading....">
              <Gammingpage />
            </React.Suspense>
          }
        />

        <Route
          path="/arts"
          element={
            <React.Suspense fallback="Loading....">
              <Art />
            </React.Suspense>
          }
        />
        <Route
          path="/anime"
          element={
            <React.Suspense fallback="Loading....">
              <Animepage />
            </React.Suspense>
          }
        />
        <Route
          path="/sketches"
          element={
            <React.Suspense fallback="Loading....">
              <Sketchespage />
            </React.Suspense>
          }
        />
        <Route
          path="/doodle"
          element={
            <React.Suspense fallback="Loading....">
              <Doodlepage />
            </React.Suspense>
          }
        />
        <Route
          path="/surreat"
          element={
            <React.Suspense fallback="Loading....">
              <Surreatpage />
            </React.Suspense>
          }
        />
        <Route
          path="/painting"
          element={
            <React.Suspense fallback="Loading....">
              <Painting />
            </React.Suspense>
          }
        />

        <Route
          path="/travel"
          element={
            <React.Suspense fallback="Loading....">
              <Travel />
            </React.Suspense>
          }
        />
        <Route
          path="/pagoda"
          element={
            <React.Suspense fallback="Loading....">
              <Pagoda />
            </React.Suspense>
          }
        />
        <Route
          path="/beach"
          element={
            <React.Suspense fallback="Loading....">
              <Beach />
            </React.Suspense>
          }
        />
        <Route
          path="/waterfall"
          element={
            <React.Suspense fallback="Loading....">
              <Waterfall />
            </React.Suspense>
          }
        />
        <Route
          path="/mountains"
          element={
            <React.Suspense fallback="Loading....">
              <Mountain />
            </React.Suspense>
          }
        />
        <Route
          path="/Advanture_trip"
          element={
            <React.Suspense fallback="Loading....">
              <Advanture />
            </React.Suspense>
          }
        />
        <Route
          path="/computer"
          element={
            <React.Suspense fallback="Loading....">
              <ComputerPage />
            </React.Suspense>
          }
        />
        <Route
          path="/electronic"
          element={
            <React.Suspense fallback="Loading....">
              <ElectronicPage />
            </React.Suspense>
          }
        />
        <Route
          path="/innovation"
          element={
            <React.Suspense fallback="Loading....">
              <InnovationPage />
            </React.Suspense>
          }
        />
        <Route
          path="/smartphone"
          element={
            <React.Suspense fallback="Loading....">
              <SmartphonePage />
            </React.Suspense>
          }
        />
        <Route
          path="/software"
          element={
            <React.Suspense fallback="Loading....">
              <SoftwarePage />
            </React.Suspense>
          }
        />

        <Route
          path="/korean"
          element={
            <React.Suspense fallback="Loading....">
              <Koreanpage />
            </React.Suspense>
          }
        />
        <Route
          path="/movie"
          element={
            <React.Suspense fallback="Loading....">
              <Moviepage />
            </React.Suspense>
          }
        />
        <Route
          path="/cartoon"
          element={
            <React.Suspense fallback="Loading....">
              <Cartoonpage />
            </React.Suspense>
          }
        />
        <Route
          path="/cinema"
          element={
            <React.Suspense fallback="Loading....">
              <Cinemapage />
            </React.Suspense>
          }
        />
        <Route
          path="/music"
          element={
            <React.Suspense fallback="Loading....">
              <Music />
            </React.Suspense>
          }
        />
        <Route
          path="/asian"
          element={
            <React.Suspense fallback="Loading....">
              <Asianpage />
            </React.Suspense>
          }
        />
        <Route
          path="/myanmar"
          element={
            <React.Suspense fallback="Loading....">
              <Myanmar />
            </React.Suspense>
          }
        />

        <Route
          path="/healthylife"
          element={
            <React.Suspense fallback="Loading....">
              <HealthyLifePage />
            </React.Suspense>
          }
        />
        <Route
          path="/science"
          element={
            <React.Suspense fallback="Loading....">
              <SciencePage />
            </React.Suspense>
          }
        />
        <Route
          path="/lifestyles"
          element={
            <React.Suspense fallback="Loading....">
              <Lifestyle />
            </React.Suspense>
          }
        />
        <Route
          path="/Blogger"
          element={
            <React.Suspense fallback="Loading....">
              <Beautyblogger />
            </React.Suspense>
          }
        />
        <Route
          path="/makeup"
          element={
            <React.Suspense fallback="Loading....">
              <Makeuppage />
            </React.Suspense>
          }
        />
        <Route
          path="/salon"
          element={
            <React.Suspense fallback="Loading....">
              <SalonPage />
            </React.Suspense>
          }
        />
        <Route
          path="/skincare"
          element={
            <React.Suspense fallback="Loading....">
              <Skinpage />
            </React.Suspense>
          }
        />
        <Route
          path="/exercise"
          element={
            <React.Suspense fallback="Loading....">
              <ExercisePage />
            </React.Suspense>
          }
        />
        <Route
          path="/beautyclinic"
          element={
            <React.Suspense fallback="Loading....">
              <BeautyClinicpage />
            </React.Suspense>
          }
        />

        <Route
          path="/government"
          element={
            <React.Suspense fallback="Loading....">
              <Government />
            </React.Suspense>
          }
        />
        <Route
          path="/ministry"
          element={
            <React.Suspense fallback="Loading....">
              <Ministry />
            </React.Suspense>
          }
        />
        <Route
          path="/police_station"
          element={
            <React.Suspense fallback="Loading....">
              <Police />
            </React.Suspense>
          }
        />
        <Route
          path="/leader"
          element={
            <React.Suspense fallback="Loading....">
              <Leader />
            </React.Suspense>
          }
        />
        <Route
          path="/passport"
          element={
            <React.Suspense fallback="Loading....">
              <Passport />
            </React.Suspense>
          }
        />
        <Route
          path="/law"
          element={
            <React.Suspense fallback="Loading....">
              <Law />
            </React.Suspense>
          }
        />

        <Route
          path="/history"
          element={
            <React.Suspense fallback="Loading....">
              <History />
            </React.Suspense>
          }
        />
        <Route
          path="/culture"
          element={
            <React.Suspense fallback="Loading....">
              <Culture />
            </React.Suspense>
          }
        />
        <Route
          path="/dynasty"
          element={
            <React.Suspense fallback="Loading....">
              <Dynasty />
            </React.Suspense>
          }
        />
        <Route
          path="/religion"
          element={
            <React.Suspense fallback="Loading....">
              <Religous />
            </React.Suspense>
          }
        />
        <Route
          path="/dress"
          element={
            <React.Suspense fallback="Loading....">
              <Dress />
            </React.Suspense>
          }
        />
        <Route
          path="/region"
          element={
            <React.Suspense fallback="Loading....">
              <Region />
            </React.Suspense>
          }
        />

        <Route
          path="/business"
          element={
            <React.Suspense fallback="Loading....">
              <Business />
            </React.Suspense>
          }
        />

        <Route
          path="/education"
          element={
            <React.Suspense fallback="Loading....">
              <Education />
            </React.Suspense>
          }
        />
        <Route
          path="/university"
          element={
            <React.Suspense fallback="Loading....">
              <University />
            </React.Suspense>
          }
        />

        <Route
          path="/science"
          element={
            <React.Suspense fallback="Loading....">
              <SciencePage />
            </React.Suspense>
          }
        />
        <Route
          path="/astronomy"
          element={
            <React.Suspense fallback="Loading....">
              <AstronomyPage />
            </React.Suspense>
          }
        />
        <Route
          path="/biology"
          element={
            <React.Suspense fallback="Loading....">
              <BilologyPage />
            </React.Suspense>
          }
        />
        <Route
          path="/chemistry"
          element={
            <React.Suspense fallback="Loading....">
              <ChemistryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/earthscience"
          element={
            <React.Suspense fallback="Loading....">
              <EarthSciencePage />
            </React.Suspense>
          }
        />
        <Route
          path="/plants"
          element={
            <React.Suspense fallback="Loading....">
              <PlantsPage />
            </React.Suspense>
          }
        />
        <Route
          path="/physics"
          element={
            <React.Suspense fallback="Loading....">
              <PhysicsPage />
            </React.Suspense>
          }
        />
        <Route
          path="/mammals"
          element={
            <React.Suspense fallback="Loading....">
              <MammalsPage />
            </React.Suspense>
          }
        />

        <Route
          path="/literature"
          element={
            <React.Suspense fallback="Loading....">
              <LiteraturePage />
            </React.Suspense>
          }
        />
        <Route
          path="/family"
          element={
            <React.Suspense fallback="Loading....">
              <FamilyPage />
            </React.Suspense>
          }
        />
        <Route
          path="/luxury"
          element={
            <React.Suspense fallback="Loading....">
              <LuxuryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/poetry"
          element={
            <React.Suspense fallback="Loading....">
              <PoetryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/fiction"
          element={
            <React.Suspense fallback="Loading....">
              <FictionPage />
            </React.Suspense>
          }
        />
        <Route
          path="/drama"
          element={
            <React.Suspense fallback="Loading....">
              <DramaPage />
            </React.Suspense>
          }
        />
        <Route
          path="/comedy"
          element={
            <React.Suspense fallback="Loading....">
              <ComedyPage />
            </React.Suspense>
          }
        />
        <Route
          path="/novel"
          element={
            <React.Suspense fallback="Loading....">
              <NovelPage />
            </React.Suspense>
          }
        />
        <Route
          path="/shortstory"
          element={
            <React.Suspense fallback="Loading....">
              <ShortstoryPage />
            </React.Suspense>
          }
        />
        <Route
          path="/romance"
          element={
            <React.Suspense fallback="Loading....">
              <RomancePage />
            </React.Suspense>
          }
        />
        <Route
          path="/modern"
          element={
            <React.Suspense fallback="Loading....">
              <ModernPage />
            </React.Suspense>
          }
        />
        <Route
          path="/health"
          element={
            <React.Suspense fallback="Loading....">
              <Healthpage />
            </React.Suspense>
          }
        />
        <Route
          path="/healthclinic"
          element={
            <React.Suspense fallback="Loading....">
              <HealthClinicPage />
            </React.Suspense>
          }
        />
        <Route
          path="/hfoods"
          element={
            <React.Suspense fallback="Loading....">
              <Hfoodspage />
            </React.Suspense>
          }
        />
        <Route
          path="/infodoctor"
          element={
            <React.Suspense fallback="Loading....">
              <InfodoctorPage />
            </React.Suspense>
          }
        />
        <Route
          path="/medicine"
          element={
            <React.Suspense fallback="Loading....">
              <MedicinePage />
            </React.Suspense>
          }
        />
        <Route
          path="/yoga"
          element={
            <React.Suspense fallback="Loading....">
              <Yogapage />
            </React.Suspense>
          }
        />

        <Route
          path="/post"
          element={
            <React.Suspense fallback="Loading....">
              <PostformPage />
            </React.Suspense>
          }
        />
        <Route
          path="/update/:id"
          element={
            <React.Suspense fallback="Loading....">
              <UpdateformPage />
            </React.Suspense>
          }
        />

        <Route
          path="/detail"
          element={
            <React.Suspense fallback="Loading....">
              <DetailPage />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback="Loading....">
              <LoginandRegister />
            </React.Suspense>
          }
        />

        <Route
          path="/admin"
          element={
            <React.Suspense fallback="Loading....">
              <AdminPage />
            </React.Suspense>
          }
        />

        <Route
          path="/requestform"
          element={
            <React.Suspense fallback="Loading....">
              <RequestFormPage />
            </React.Suspense>
          }
        />
        <Route
          path="/admindetail/:id"
          element={
            <React.Suspense fallback="Loading....">
              <AdmindetailPage />
            </React.Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <React.Suspense fallback="Loading....">
              <LazySearch />
            </React.Suspense>
          }
        />

        <Route
          path="/aboutus"
          element={
            <React.Suspense fallback="Loading....">
              <Aboutpage />
            </React.Suspense>
          }
        />
        <Route
          path="/editprofile"
          element={
            <React.Suspense fallback="Loading....">
              <UsereditForm />
            </React.Suspense>
          }
        />
        <Route
          path="/:cate/:id"
          element={
            <React.Suspense fallback="Loading....">
              <UserDetailPage />
            </React.Suspense>
          }
        />
        {/* <Route
          path="/detail/:cate/:id"
          element={
            <React.Suspense fallback="Loading....">
              <DetailWithCount />
            </React.Suspense>
          }
        /> */}
        <Route
          path="/addcate"
          element={
            <React.Suspense fallback="Loading....">
              <AddCategoriesPage />
            </React.Suspense>
          }
        />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
