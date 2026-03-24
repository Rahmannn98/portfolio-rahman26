import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center">
      <Navbar />
      <Hero />
      <Project />
    </main>
  );
}