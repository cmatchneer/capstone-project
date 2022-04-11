import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar-comp";
import Home from "./routes/home/home-page";
import SignIn from "./routes/sign-in/sign-in-comp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
