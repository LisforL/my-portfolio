import "../styles/home.css";
import Hero from "../components/home/Hero";
import ProjectPlot from "../components/home/ProjectPlot";
import ProcessTimeline from "../components/home/ProcessTimeline";
import FitQuiz from "../components/home/FitQuiz";
import DrawForFun from "../components/home/DrawForFun";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ProjectPlot />
      <ProcessTimeline />
      <FitQuiz />
      <DrawForFun />
    </div>
  );
};

export default Home;
