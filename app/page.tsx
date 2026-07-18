import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Reward from "./components/Experiences";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center">
      <Navbar />
      <Hero />
      <Project />
      <Reward />
    </main>
  );
}