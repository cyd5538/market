import Login from './components/sign/Login';
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import Sign from './components/sign/Sign';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
