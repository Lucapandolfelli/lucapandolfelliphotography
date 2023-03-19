import Container from "../components/Container"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function MainLayout ({ children }) {
  return (
    <Container>
      <Header />
      { children }
      <Footer />
    </Container>
  )
}