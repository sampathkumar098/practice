import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Profile from "./pages/Profile";
import ImpactDesktop from "./pages/ImpactDesktop";
import ImpactMobile from "./pages/ImpactMobile";
import Benefits from "./pages/Benefits";
import Benefits1 from "./pages/Benefits1";
import CareerMobile from "./pages/CareerMobile";
import CareerDesktop from "./pages/CareerDesktop";
import Animation1 from "./pages/Animation1";
import Animation2 from "./pages/Animation2";
import Image1 from "./pages/Image1";
import CaseStudies from "./pages/CaseStudies";
import CaseStudiesMobile from "./pages/CaseStudiesMobile";
import Notes from "./pages/Notes";
import Process from "./pages/Process";
import Process1 from "./pages/Process1";
import Process2 from "./pages/Process2";
import Process3 from "./pages/Process3";
import Stage2 from "./pages/Stage2";
import Stage3 from "./pages/Stage3";
import Stage4 from "./pages/Stage4";
import Process4 from "./pages/Process4";
import Process5 from "./pages/Process5";
import Process6 from "./pages/Process6";
import Profile1 from "./pages/Profile1";
import Profile2 from "./pages/Profile2";
import Home from "./pages/Home";
import AboutMobile from "./pages/AboutMobile";
import AboutUs from "./pages/AboutUs";
import Section from "./pages/Section";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";
import HomeMobile from "./pages/HomeMobile";
import Blog from "./pages/Blog";
import BlogMobile from "./pages/BlogMobile";
import Article from "./pages/Article";
import ArticleMobile from "./pages/ArticleMobile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/impact-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/impact-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/benefits":
        title = "";
        metaDescription = "";
        break;
      case "/benefits1":
        title = "";
        metaDescription = "";
        break;
      case "/career-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/career-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/animation":
        title = "";
        metaDescription = "";
        break;
      case "/animation1":
        title = "";
        metaDescription = "";
        break;
      case "/image":
        title = "";
        metaDescription = "";
        break;
      case "/case-studies":
        title = "";
        metaDescription = "";
        break;
      case "/case-studies-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/notes":
        title = "";
        metaDescription = "";
        break;
      case "/process3":
        title = "";
        metaDescription = "";
        break;
      case "/process":
        title = "";
        metaDescription = "";
        break;
      case "/process4":
        title = "";
        metaDescription = "";
        break;
      case "/process1":
        title = "";
        metaDescription = "";
        break;
      case "/stage-2":
        title = "";
        metaDescription = "";
        break;
      case "/stage-3":
        title = "";
        metaDescription = "";
        break;
      case "/stage-4":
        title = "";
        metaDescription = "";
        break;
      case "/process5":
        title = "";
        metaDescription = "";
        break;
      case "/process2":
        title = "";
        metaDescription = "";
        break;
      case "/process6":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/profile1":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/about-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/section":
        title = "";
        metaDescription = "";
        break;
      case "/section1":
        title = "";
        metaDescription = "";
        break;
      case "/section2":
        title = "";
        metaDescription = "";
        break;
      case "/section3":
        title = "";
        metaDescription = "";
        break;
      case "/section4":
        title = "";
        metaDescription = "";
        break;
      case "/section5":
        title = "";
        metaDescription = "";
        break;
      case "/section6":
        title = "";
        metaDescription = "";
        break;
      case "/section7":
        title = "";
        metaDescription = "";
        break;
      case "/home-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/blog-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/article":
        title = "";
        metaDescription = "";
        break;
      case "/article-mobile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/impact-desktop" element={<ImpactDesktop />} />
      <Route path="/impact-mobile" element={<ImpactMobile />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/benefits1" element={<Benefits1 />} />
      <Route path="/career-mobile" element={<CareerMobile />} />
      <Route path="/career-desktop" element={<CareerDesktop />} />
      <Route path="/animation" element={<Animation1 />} />
      <Route path="/animation1" element={<Animation2 />} />
      <Route path="/image" element={<Image1 />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies-mobile" element={<CaseStudiesMobile />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/process3" element={<Process />} />
      <Route path="/process" element={<Process1 />} />
      <Route path="/process4" element={<Process2 />} />
      <Route path="/process1" element={<Process3 />} />
      <Route path="/stage-2" element={<Stage2 />} />
      <Route path="/stage-3" element={<Stage3 />} />
      <Route path="/stage-4" element={<Stage4 />} />
      <Route path="/process5" element={<Process4 />} />
      <Route path="/process2" element={<Process5 />} />
      <Route path="/process6" element={<Process6 />} />
      <Route path="/profile" element={<Profile1 />} />
      <Route path="/profile1" element={<Profile2 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-mobile" element={<AboutMobile />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/section" element={<Section />} />
      <Route path="/section1" element={<Section1 />} />
      <Route path="/section2" element={<Section2 />} />
      <Route path="/section3" element={<Section3 />} />
      <Route path="/section4" element={<Section4 />} />
      <Route path="/section5" element={<Section5 />} />
      <Route path="/section6" element={<Section6 />} />
      <Route path="/section7" element={<Section7 />} />
      <Route path="/home-mobile" element={<HomeMobile />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-mobile" element={<BlogMobile />} />
      <Route path="/article" element={<Article />} />
      <Route path="/article-mobile" element={<ArticleMobile />} />
    </Routes>
  );
}
export default App;
