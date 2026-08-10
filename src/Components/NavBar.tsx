import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex w-screen justify-between fixed z-10 top-0 left-0 p-5">
      <h1 className="text-3xl">
        Jean<span className="text-primary">.</span>
      </h1>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/resumo">Resumo</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
