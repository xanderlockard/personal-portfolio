import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar }  from './Layout'
import Home from '../../pages/home/Home'
import Experience from '../../pages/experience/Experience';
import Contact from '../../pages/contact/Contact';
import Projects from '../../pages/projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
