import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employees from '../Pages/Employees/Employees';
import Home from '../Pages/Home/Home';

const Routing = () => (
  <Router className="index">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/employee-list" element={<Employees />} />
    </Routes>
</Router>
);

export default Routing;