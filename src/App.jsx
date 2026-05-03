import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <StudentCard />
      <StudentList />
      <Footer />
    </>
  );
}

export default App;
