import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="relative flex flex-col h-screen justify-around items-center lg:flex-row">
      <div className="relative bg-linear-to-br from-primary to-background w-2xs h-66">
        <Image
          src={"/Perfil2-NB.png"}
          alt={"Foto"}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col w-full max-w-2xl p-2.5 gap-2.5">
        <h1 className="text-5xl"><strong>About <span className="text-primary">me</span></strong></h1>
        <h2 className="text-3xl">Full stack developer</h2>
        <p>
          My name is <strong className="text-primary">Jean Vinícius</strong>. I create digital experiences that combine
          innovative technology with elegant design. I use front-end and
          back-end skills to create amazing user experiences. One fun fact about
          me is that I play table tennis and chess.
        </p>
        <button className="flex bg-primary rounded-2xl text-foreground w-30 h-10 justify-center items-center">Download CV</button>
      </div>
    </section>
  );
}
