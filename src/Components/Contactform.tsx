"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { TbSend, TbLoader2, TbCheck, TbX } from "react-icons/tb";
type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-lg w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="from_name" className="text-sm text-neutral-300">
          Nome
        </label>
        <input
          id="from_name"
          name="from_name"
          type="text"
          required
          className="bg-[#171717] border border-neutral-800 rounded-lg px-4 py-2.5 text-white
                     focus:outline-none focus:border-[#EF4444] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="from_email" className="text-sm text-neutral-300">
          E-mail
        </label>
        <input
          id="from_email"
          name="from_email"
          type="email"
          required
          className="bg-[#171717] border border-neutral-800 rounded-lg px-4 py-2.5 text-white
                     focus:outline-none focus:border-[#EF4444] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-neutral-300">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="bg-[#171717] border border-neutral-800 rounded-lg px-4 py-2.5 text-white
                     focus:outline-none focus:border-[#EF4444] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 bg-[#EF4444] hover:bg-[#dc2626]
             disabled:opacity-60 text-white font-medium rounded-full px-6 py-2.5
             transition-colors"
      >
        {status === "loading" && (
          <TbLoader2 className="animate-spin" size={18} />
        )}
        {status === "success" && <TbCheck size={18} />}
        {status === "error" && <TbX size={18} />}
        {status === "idle" && <TbSend size={18} />}
        {status === "loading"
          ? "Enviando..."
          : status === "success"
            ? "Enviado!"
            : status === "error"
              ? "Erro ao enviar"
              : "Enviar mensagem"}
      </button>
    </form>
  );
}
