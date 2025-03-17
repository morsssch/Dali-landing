import {
  Header,
  IntroSection,
  EducationSection,
  CellsSection,
  CinemaSection,
  GallerySection,
  Footer
} from "../../index";

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <IntroSection/>
      <div className="tear tear__top"></div>
      <EducationSection/>
      <CellsSection/>
      <CinemaSection/>
      <div className="tear tear__bottom"></div>
      <GallerySection/>
      <Footer/>
    </div>
  );
};

export default Home;
