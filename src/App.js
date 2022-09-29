import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Animepage from "./pages/art/Animepage";
import Art from "./pages/art/Art";
import Doodlepage from "./pages/art/Doodlepage";
import Painting from "./pages/art/Painting";
import Sketchespage from "./pages/art/Sketchespage";
import Surreatpage from "./pages/art/Surreatpage";
import Beauty from "./pages/beauty/Beauty";
import Beautyblogger from "./pages/beauty/Beautyblogger";
import Makeuppage from "./pages/beauty/makeupPage";
import SalonPage from "./pages/beauty/SalonPage";
import Skinpage from "./pages/beauty/Skinpage";
import ExercisePage from "./pages/lifestylepage/exercisePage";
import Lifestyle from "./pages/lifestylepage/Lifestyle";
import Asianpage from "./pages/entertainment/Asianpage";
import Cartoonpage from "./pages/entertainment/Cartoonpage";
import Cinemapage from "./pages/entertainment/Cinemapage";
import Entertainment from "./pages/entertainment/Entertainment";
import Koreanpage from "./pages/entertainment/Koreanpage";
import Moviepage from "./pages/entertainment/Moviepage";
import Music from "./pages/entertainment/Music";
import Myanmar from "./pages/entertainment/Myanmar";
import DetailPage from "./pages/detailpage/DetailPage";
import Business from "./pages/business/Business";
import Education from "./pages/education/Education";
import University from "./pages/education/University";
import Govenment from "./pages/government/Govenment";
import Law from "./pages/government/Law";
import Leader from "./pages/government/Leader";
import Ministry from "./pages/government/Ministry";
import Passport from "./pages/government/Passport";
import Police from "./pages/government/Police";
import Culture from "./pages/history/Culture";
import Dress from "./pages/history/Dress";
import Dynasty from "./pages/history/Dynasty";
import History from "./pages/history/History";
import Region from "./pages/history/Region";
import Religous from "./pages/history/Religous";
import Home from "./pages/home/Home";
import ComedyPage from "./pages/literature/ComedyPage";
import DramaPage from "./pages/literature/DramaPage";
import FictionPage from "./pages/literature/FictionPage";
import LiteraturePage from "./pages/literature/LiteraturePage";
import NovelPage from "./pages/literature/NovelPage";
import PoetryPage from "./pages/literature/PoetryPage";
import RomancePage from "./pages/literature/RomancePage";
import ShortstoryPage from "./pages/literature/ShortstoryPage";
import PostformPage from "./pages/post/PostformPage";
import AstronomyPage from "./pages/science/AstronomyPage";
import BilologyPage from "./pages/science/BilologyPage";
import ChemistryPage from "./pages/science/ChemistryPage";
import EarthSciencePage from "./pages/science/EarthSciencePage";
import MammalsPage from "./pages/science/MammalsPage";
import PhysicsPage from "./pages/science/PhysicsPage";
import PlantsPage from "./pages/science/PlantsPage";
import SciencePage from "./pages/science/SciencePage";
import Boxingpage from "./pages/sport/Boxingpage";
import Caneballpage from "./pages/sport/Caneballpage";
import Chesspage from "./pages/sport/Chesspage";
import Footballpage from "./pages/sport/Footballpage";
import Gammingpage from "./pages/sport/Gammingpage";
import Sport from "./pages/sport/Sport";
import ComputerPage from "./pages/tecnology/ComputerPage";
import ElectronicPage from "./pages/tecnology/ElectronicPage";
import InnovationPage from "./pages/tecnology/InnovationPage";
import SmartphonePage from "./pages/tecnology/SmartphonePage";
import SoftwarePage from "./pages/tecnology/SoftwarePage";
import TecnologyPages from "./pages/tecnology/TecnologyPage";

import Advanture from "./pages/travelling/Advanture";
import Beach from "./pages/travelling/Beach";
import Mountain from "./pages/travelling/Mountain";
import Pagoda from "./pages/travelling/Pagoda";
import Travel from "./pages/travelling/Travel";
import Waterfall from "./pages/travelling/Waterfall";
import FamilyPage from "./pages/lifestylepage/familyPage";
import LuxuryPage from "./pages/lifestylepage/luxuryPage";
import ModernPage from "./pages/lifestylepage/modernPage";
import HealthyLifePage from "./pages/lifestylepage/healthyPage";
import BeautyClinicpage from "./pages/beauty/Clinicpage";
import Healthpage from "./pages/healthpage/HealthPage";
import HealthClinicPage from "./pages/healthpage/HealthClinicPage";
import Hfoodspage from "./pages/healthpage/HfoodsPage";
import InfodoctorPage from "./pages/healthpage/InfodoctorPage";
import MedicinePage from "./pages/healthpage/MedicinePage";
import Yogapage from "./pages/healthpage/YogaPage";
import LoginandRegister from "./pages/loginPage/LoginPage";
import UpdateformPage from "./pages/post/UpdateformPage";
import RequestFormPage from "./pages/adminPage/RequestFormPage";
import AdminPage from "./pages/adminPage/AdminPage";
import AdmindetailPage from "./pages/adminDetail/AdminDetailPage";
import SearchPage from "./pages/searchpage/SearchPage";
import Profile from "./pages/profile/Profile";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/technology" element={<TecnologyPages />} />

        <Route path="/travel" element={<Travel />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/technology" element={<TecnologyPages />} />

        <Route path="/Sports" element={<Sport />} />
        <Route path="/football" element={<Footballpage />} />
        <Route path="/boxing" element={<Boxingpage />} />
        <Route path="/chess" element={<Chesspage />} />
        <Route path="/cane" element={<Caneballpage />} />
        <Route path="/gamming" element={<Gammingpage />} />

        <Route path="/arts" element={<Art />} />
        <Route path="/anime" element={<Animepage />} />
        <Route path="/sketches" element={<Sketchespage />} />
        <Route path="/doodle" element={<Doodlepage />} />
        <Route path="/surreat" element={<Surreatpage />} />
        <Route path="/painting" element={<Painting />} />

        <Route path="/travel" element={<Travel />} />
        <Route path="/pagoda" element={<Pagoda />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/waterfall" element={<Waterfall />} />
        <Route path="/mountains" element={<Mountain />} />
        <Route path="/Advanture_trip" element={<Advanture />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/electronic" element={<ElectronicPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/smartphone" element={<SmartphonePage />} />
        <Route path="/software" element={<SoftwarePage />} />

        <Route path="/korean" element={<Koreanpage />} />
        <Route path="/movie" element={<Moviepage />} />
        <Route path="/cartoon" element={<Cartoonpage />} />
        <Route path="/cinema" element={<Cinemapage />} />
        <Route path="/music" element={<Music />} />
        <Route path="/asian" element={<Asianpage />} />
        <Route path="/myanmar" element={<Myanmar />} />

        <Route path="/beauty" element={<Beauty />} />
        <Route path="/healthylife" element={<HealthyLifePage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/lifestyles" element={<Lifestyle />} />
        <Route path="/Blogger" element={<Beautyblogger />} />
        <Route path="/makeup" element={<Makeuppage />} />
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/skincare" element={<Skinpage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/beautyclinic" element={<BeautyClinicpage />} />

        <Route path="/govenment" element={<Govenment />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/police_station" element={<Police />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/law" element={<Law />} />

        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/dynasty" element={<Dynasty />} />
        <Route path="/religion" element={<Religous />} />
        <Route path="/dress" element={<Dress />} />
        <Route path="/region" element={<Region />} />

        <Route path="/business" element={<Business />} />

        <Route path="/education" element={<Education />} />
        <Route path="/university" element={<University />} />

        <Route path="/science" element={<SciencePage />} />
        <Route path="/astronomy" element={<AstronomyPage />} />
        <Route path="/biology" element={<BilologyPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/earthscience" element={<EarthSciencePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/mammals" element={<MammalsPage />} />

        <Route path="/literature" element={<LiteraturePage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/luxury" element={<LuxuryPage />} />
        <Route path="/poetry" element={<PoetryPage />} />
        <Route path="/fiction" element={<FictionPage />} />
        <Route path="/drama" element={<DramaPage />} />
        <Route path="/comedy" element={<ComedyPage />} />
        <Route path="/novel" element={<NovelPage />} />
        <Route path="/shortstory" element={<ShortstoryPage />} />
        <Route path="/romance" element={<RomancePage />} />
        <Route path="/modern" element={<ModernPage />} />
        <Route path="/health" element={<Healthpage />} />
        <Route path="/healthclinic" element={<HealthClinicPage />} />
        <Route path="/hfoods" element={<Hfoodspage />} />
        <Route path="/infodoctor" element={<InfodoctorPage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/yoga" element={<Yogapage />} />

        <Route path="/post" element={<PostformPage />} />
        <Route path="/update/:id" element={<UpdateformPage />} />

        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginandRegister />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/requestform" element={<RequestFormPage />} />
        <Route path="/admindetail/:id" element={<AdmindetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
