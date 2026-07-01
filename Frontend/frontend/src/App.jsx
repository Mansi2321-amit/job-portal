import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/profile";
import Companies from "./pages/companies";
import NotFound from "./pages/notfound";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar onSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer on all pages */}
      <Footer />
    </>
  );
}

export default App;