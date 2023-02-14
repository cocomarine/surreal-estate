import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

import "../styles/app.css";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.id);
  };

  const handleLogout = () => {
    window.FB.logout(() => {
      setUserID("");
    });
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Properties userID={userID} />} />
        <Route path="add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
