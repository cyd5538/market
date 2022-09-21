import Login from './components/sign/Login';
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import Sign from './components/sign/Sign';
import All from './page/All';
import MyGoods from './page/MyGoods';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/mygoods" element={<MyGoods />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
