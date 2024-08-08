import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Body from './Components/Body';
import Browse from './Components/Browse';

const App = () => {
  const user = useSelector((state) => state.user.user);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/browse" element={user ? <Browse /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
