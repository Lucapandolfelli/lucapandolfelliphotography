import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home'
/* import AboutPage from './pages/About'
import ContactPage from './pages/Contact' */
import ErrorPage from './pages/Error'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} /> */}
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
