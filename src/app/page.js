import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Landing from "./components/landing"; 
import Activities from "./components/activities";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Activities />
    </div>
  );
}
