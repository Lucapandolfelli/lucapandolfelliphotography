import { Route, Routes } from "react-router-dom";
import Container from './components/Container'
import Header from "./components/Header";
import Footer from './components/Footer'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ErrorPage from './pages/Error'

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}
