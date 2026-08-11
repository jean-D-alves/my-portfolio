import ContactForm from "@/src/Components/Contactform";
import NavBar from "@/src/Components/NavBar";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

export default function Contact() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-center items-center w-screen h-screen p-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full h-full p-9 gap-9 ">
          <div  className="flex flex-col justify-basiline items-baseline bg-primary w-2xs h-80 p-9 gap-9 lg:w-xs ">
            <h1 className="text-4xl">Get in touch</h1>
            <div className="flex flex-col gap-4 justify-center items-baseline text-center">
              <div className="flex flex-row items-center gap-2">
                <TbBrandInstagram size={25} />
                <a
                  href="https://instagram.com/alves._.jean"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alves._.jean
                </a>
              </div>
              <div className="flex flex-row items-center gap-2">
                <TbBrandLinkedin size={25} />
                <a
                  href="https://www.linkedin.com/in/jean-vin%C3%ADcius"
                  target="_blank"
                  rel="noreferrer"
                >
                  jean-vinícius
                </a>
              </div>
              <div className="flex flex-row items-center gap-2">
                <TbBrandGithub size={25} />
                <a
                  href="https://github.com/jean-d-alves"
                  target="_blank"
                  rel="noreferrer"
                >
                  jean-D-alves
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center">
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
