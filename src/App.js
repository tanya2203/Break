import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./Container/Home";
import Login from "./Container/Login";
import { fetchUser, userAccessToken } from "./utils/fetchUser";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      navigate("/login", { replace: true });
    } else {
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, []);

  return (
    // <Router>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home user={user} />} />
    </Routes>
    // </Router>
  );
};

export default App;
