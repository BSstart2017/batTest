import { Container } from "react-bootstrap";
import ContentAfter from "./components/ContentAfter/ContentAfter";
import ContentBefore from "./components/ContentBefore/ContentBefore";
import ContentCarouselNewItemsContainer from "./components/ContentCarouselNewItems/ContentCarouselNewItemsContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = (props) => {
  return (
    <Container fluid>
      <Header />
      <ContentBefore />
      <ContentCarouselNewItemsContainer />
      <ContentAfter />
      <Footer />
    </Container>
  );
};

export default App;
