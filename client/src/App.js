import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./components/sign/Login";
import Header from "./components/Header";
import Home from "./page/Home";
import GoodsDetail from "./page/GoodsDetail";
import Sign from "./components/sign/Sign";
import All from "./page/All";
import MyGoods from "./page/MyGoods";
import Favor from "./page/Favor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from './style/GlobalStyle';


const LightTheme = {
  HeaderBackground: "#FFCACA",
  HeaderColor: "black",
  HeadertagLineColor: "black",
  pageBackground: "#FFECEF",
  titleColor: "black",
  tagLineColor: "black",
  toggleColor: "yellow",
  toggleBorder: "black",
  toggleBg: "black"
};

const DarkTheme = {
  HeaderBackground: '#251B37',
  HeaderColor: "white",
  HeadertagLineColor: "white",
  pageBackground: '#372948',
  titleColor: "white",
  tagLineColor: "white",
  toggleColor: "black",
  toggleBorder: "yellow",
  toggleBg: "yellow"
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};


function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme)
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
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
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all" element={<All />} />
        <Route path="/mygoods" element={<MyGoods />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<GoodsDetail />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/favor" element={<Favor />} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;
