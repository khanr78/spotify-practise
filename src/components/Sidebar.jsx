import { Home, Search, Library, Plus, Heart } from "lucide-react";

const navigation = [
  { label: "Home", icon: Home },
  { label: "Search", icon: Search },
  { label: "Your Library", icon: Library },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col gap-6 rounded-xl bg-black p-5">
      <h1 className="text-2xl font-bold text-green-400">
        ♪ Spotify
      </h1>

      <nav className="space-y-5">
        {navigation.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex cursor-pointer items-center gap-4 text-gray-300 transition hover:text-white"
          >
            <Icon size={22} />
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-4 space-y-5">
        <div className="flex items-center gap-3 text-gray-300">
          <Plus size={22} />
          <span>Create playlist</span>
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <Heart size={22} className="text-green-400" />
          <span>Liked Songs</span>
        </div>
      </div>

      <div className="mt-auto rounded-lg bg-zinc-900 p-4">
        <p className="font-semibold">Discover new music</p>
        <p className="mt-2 text-sm text-gray-400">
          Find your next favorite song.
        </p>
        <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
          Explore
        </button>
      </div>
    </aside>
  );
}