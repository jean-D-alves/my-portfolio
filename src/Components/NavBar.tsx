"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resumo", label: "Resumo" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="flex w-screen justify-between items-center fixed z-50 top-0 left-0 p-5">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-3xl">
            Jean<span className="text-primary">.</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          className="md:hidden relative z-50 text-3xl"
        >
          {isOpen ? <TbX /> : <TbMenu2 />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-neutral-950 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}