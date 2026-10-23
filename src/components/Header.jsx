import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-2">
        <button className="rounded-full bg-black p-2">
          <ChevronLeft size={22} />
        </button>
        <button className="rounded-full bg-black p-2">
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="flex flex-1 items-center gap-2 rounded-full bg-zinc-800 px-4 py-3 sm:max-w-sm">
        <Search size={20} className="shrink-0 text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
        />
      </div>

      <button className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105">
        Explore Premium
      </button>
    </header>
  );
}