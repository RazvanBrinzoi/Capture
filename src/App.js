//Pages import
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Router
import { Routes, Route, useLocation} from "react-router-dom";
//Animations
import { AnimatePresence } from 'framer-motion';
//ScrollTOP


function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" Component={AboutUs}></Route>
          <Route path="/work" Component={OurWork}></Route>
          <Route path="/contact" Component={ContactUs}></Route>
          <Route path="/work/:id" Component={MovieDetail}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
