import React from "react";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import TemplateList from "./components/TemplateList";
import DropArea from "./components/DropArea";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <div className="pt-16 pl-16 h-screen w-full bg-[#f9f9f9] flex">
        <TemplateList />
        <DropArea />
      </div>
      <Footer/>
    </>
  );
};

export default App;
