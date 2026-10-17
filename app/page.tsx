import AboutMe from "@/src/Components/AboutMe";
import NavBar from "@/src/Components/NavBar";
import RippleBackground from "@/src/Components/RippleBackground";
export default function Home() {
  return (
    <main>
      <div className="relative flex h-screen items-center">
        <NavBar />
        <RippleBackground />
        <div className="relative z-10 flex w-full flex-col gap-4 px-[6%]">
          <h2 className="hero-reveal text-[clamp(13px,1.6vw,18px)] text-neutral-400 motion-reduce:animate-none">
            Hey, I&acute;m full stack web and mobile developer
          </h2>
          <h1 className="hero-reveal hero-reveal--title text-[clamp(44px,9vw,120px)] leading-none tracking-tight motion-reduce:animate-none">
            Jean
            <br />
            Vinícius<span className="text-primary">.</span>
          </h1>
        </div>
      </div>
      <AboutMe />
    </main>
  );
}
