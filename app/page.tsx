import AboutMe from "@/src/Components/AboutMe";
import NavBar from "@/src/Components/NavBar";
import RippleBackground from "@/src/Components/RippleBackground";
export default function Home() {
  return (
    <main>
      <div className="relative flex h-screen justify-center items-center ">
        <NavBar />
        <RippleBackground />
        <div className="flex flex-col justify-center absolute z-10">
          <h2>Hey, I&acute;m full stack web and mobile developer</h2>
          <h1 className="text-6xl">Jean Vinícius</h1>
        </div>
      </div>
      <AboutMe />
    </main>
  );
}
