import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Personalinfromation from "./COMPONENTS/Personalinfromation";
import Maindashboard from "./COMPONENTS/Maindashboard";
import NewsApproval from "./COMPONENTS/News-Approval";
import ViewNews from "./COMPONENTS/ViewNews";
import Addnewsarticle from "./COMPONENTS/Addnewsarticle";
import Epaper from "./COMPONENTS/Epaper";
import NewspaperAgencyLogin from "./COMPONENTS/NewspaperAgencyLogin";
// import RoleManagement from "./COMPONENTS/Role-Management";
import EpaperPreview from "./COMPONENTS/EpaperPreview";
import EditDraft from "./COMPONENTS/EditDraft";
import EditArticle from "./COMPONENTS/EditArticle";
import TemplateSelection from "./COMPONENTS/TemplateSelection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewspaperAgencyLogin />} />
        <Route path="/dashboard" element={<Maindashboard />} />
        {/* <Route path="/role" element={<Personalinfromation />} /> */}
        <Route path="/news-approval" element={<NewsApproval />} />
        <Route path="/viewNews" element={<ViewNews />} />
        <Route path="/addNewsArticle" element={<Addnewsarticle />} />
        <Route path="/editDraft" element={<EditDraft />} />
        <Route path="/editArticle" element={<EditArticle />} />
        <Route path="/epaper" element={<Epaper />} />
        {/* <Route path="/RoleManagement" element={<RoleManagement />} /> */}
        <Route path="/EpaperPreview" element={<EpaperPreview />} />
        <Route path="/TemplateSelection" element={<TemplateSelection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
