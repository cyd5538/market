import Login from './components/sign/Login';
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
