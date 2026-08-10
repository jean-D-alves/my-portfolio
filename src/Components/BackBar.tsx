"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

interface BackBarProps {
  name: string;
}

export default function BackBar({ name }: BackBarProps) {
  const router = useRouter();

  return (
    <nav className="flex w-full justify-between pb-10">
      <button onClick={() => router.back()} className="flex items-center gap-1">
        <IoMdArrowBack />
        Voltar
      </button>
      <h1 className="text-2xl">{name}</h1>
    </nav>
  );
}
