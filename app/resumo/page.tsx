import NavBar from "@/src/Components/NavBar";
import { TbMail, TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import Image from "next/image";
import BackBar from "@/src/Components/BackBar";

export default function Resumo() {
  return (
    <main className="min-h-screen bg-[#171717] px-6 py-5">
      <BackBar name={"Resumo"} />
      <section className="flex w-full h-full justify-center items-center">
        <div className="flex flex-col bg-accent w-1/4 h-full justify-center items-center p-7 gap-3">
          <div className="Photo relative w-2xs h-70 bg-linear-to-br from-primary to-background bg-bottom rounded-2xl">
            <Image
              src="/Perfil1-NB.png"
              alt="Foto de perfil de Jean Vinícius"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          <h1 className="text-3xl">Jean Vinícius</h1>
          <h2 className="text-2xl text-metadata">Full stack developer</h2>
          <hr className="border border-foreground w-full" />
          <div className="flex flex-col gap-4 justify-center items-baseline text-center">
            <div className="flex flex-row items-center gap-2">
              <TbMail size={25} />
              <p>jeanvinicius097@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TbBrandLinkedin size={25} />
              <a href="https://www.linkedin.com/in/jean-vin%C3%ADcius/">
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
          <button className="flex bg-primary rounded-2xl text-foreground w-full h-12 justify-center items-center hover:opacity-50">
            Download CV
          </button>
        </div>
        <div className="relative flex flex-row w-full h-full justify-around items-center px-6 text-2xl">
          <section className=" flex flex-col h-full gap-2">
            <section>
              <h2 className="text-3xl">Profile</h2>
              <p className="w-2/3">
                I&acute;m a backend developer focused on building reliable APIs
                and services with Node.js, Express, and TypeScript. I work with
                both relational and non-relational databases, adapting the data
                structure to what each project actually needs. I also build on
                the frontend with Next.js and React, and extend that into mobile
                with React Native which lets me take a project from the API all
                the way to the interface, on web and mobile alike. I&acute;m
                currently expanding into C# and ASP.NET to broaden my range
                across backend ecosystems.
              </p>
            </section>

            <section>
              <h2 className="text-3xl">Education</h2>
              <ul className="flex flex-col w-4/5 justify-center gap-2">
                <li>
                  <p>
                    <span className="text-primary">•</span> O Mercado de
                    trabalho na área de tecnologia
                    <span className="text-metadata">
                      
                      - Município de Acari-RN 06/2025-11/2025
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-primary">•</span> Do Zero ao React com
                    Next.js
                    <span className="text-metadata">
                      
                      - Udemy 10/2025-1/2026
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-primary">•</span> Curso de Typescript
                    <span className="text-metadata">
                      
                      - Udemy 10/2025-10/2025
                    </span>
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl">Work Experience</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="text-primary">•</span> Landing page for Alfa
                  & Artes.
                </li>
                <li>
                  <span className="text-primary">•</span> Website for Aitto
                  branding.
                </li>
              </ul>
            </section>
          </section>
          <hr className="border-l border-secondary h-full m-1" />

          <section className="flex flex-col h-full gap-2 ml-5">
            <section>
              <h2 className="text-3xl">Languages</h2>
              <ul>
                <li>Português - Nativo</li>
                <li>English - A2</li>
              </ul>
            </section>

            <section className="flex text-metadata flex-col w-full gap-2">
              <h2 className="text-3xl text-foreground">Technical Skills</h2>

              <div className="flex justify-center p-1 w-auto rounded-3xl bg-accent">
                <small>Node.js</small>
              </div>
              <div className="flex justify-center p-1 w-auto rounded-3xl bg-accent">
                <small>Typescript</small>
              </div>
              <div className="flex justify-center p-1 w-auto rounded-3xl bg-accent">
                <small>Next.js</small>
              </div>
              <div className="flex justify-center p-1 w-auto rounded-3xl bg-accent">
                <small>React Native</small>
              </div>
              <div className="flex justify-center p-1 w-auto rounded-3xl bg-accent">
                <small>MySQL</small>
              </div>
              <div className="flex justify-center p-1 w-auto rounded-3xl bg-accent">
                <small>MongoDB</small>
              </div>
              <div className="flex justify-center p-1 w-auto rounded-3xl bg-accent">
                <small>C# - learning</small>
              </div>
            </section>

            <section>
              <h2 className="text-3xl">GitHub</h2>
              <a
                href="https://github.com/jean-d-alves"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/jean-d-alves
              </a>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
