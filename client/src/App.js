import Login from "./components/sign/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import GoodsDetail from "./page/GoodsDetail";
import Sign from "./components/sign/Sign";
import All from "./page/All";
import MyGoods from "./page/MyGoods";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Favor from "./page/Favor";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/mygoods" element={<MyGoods />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<GoodsDetail />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/favor" element={<Favor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
