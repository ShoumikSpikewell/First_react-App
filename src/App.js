import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/layouts/navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NotFoundPage from './components/Pages/NotFoundPage';
import AddUsers from './components/users/AddUsers';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/users/add" element={<AddUsers />} />
        <Route exact path="/users/edit/:id" element={<EditUser />} />
        <Route exact path="/users/:id" element={<User />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      {/* <NotFoundPage /> */}
    </div>
    </Router>
  );
}

export default App;
