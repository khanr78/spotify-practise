import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MusicSection from "./components/MusicSection";
import { playlists, recentlyPlayed } from "./data/musicData";
import { Play, Heart, SkipBack, SkipForward, Volume2 } from "lucide-react";

function QuickPlaylist({ playlist }) {
  return (
    <div className="group flex items-center gap-3 overflow-hidden rounded-md bg-white/10 transition hover:bg-white/20">
      <img
        src={playlist.image}
        alt={playlist.title}
        className="h-16 w-16 object-cover"
      />

      <span className="min-w-0 flex-1 truncate pr-2 font-bold">
        {playlist.title}
      </span>

      <button
        aria-label={`Play ${playlist.title}`}
        className="mr-3 rounded-full bg-green-400 p-2 text-black"
      >
        <Play size={18} fill="black" />
      </button>
    </div>
  );
}

function PlayerBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 flex h-20 items-center justify-between border-t border-white/10 bg-zinc-950 px-4 sm:px-6">
      <div className="hidden min-w-0 items-center gap-3 sm:flex">
        <div>
          <p className="font-semibold">Midnight Memories</p>
          <p className="text-xs text-gray-400">Pop Collection</p>
        </div>
        <Heart size={18} className="text-gray-400" />
      </div>

      <div className="flex flex-1 flex-col items-center sm:flex-none">
        <div className="flex items-center gap-5">
          <SkipBack size={20} className="text-gray-300" />
          <button
            aria-label="Play music"
            className="rounded-full bg-white p-2 text-black transition hover:scale-105"
          >
            <Play size={19} fill="black" />
          </button>
          <SkipForward size={20} className="text-gray-300" />
        </div>

        <div className="mt-2 flex w-full max-w-64 items-center gap-2">
          <span className="text-xs text-gray-400">0:48</span>
          <div className="h-1 flex-1 rounded-full bg-zinc-700">
            <div className="h-1 w-1/3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-gray-400">3:24</span>
        </div>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <Volume2 size={20} />
        <div className="h-1 w-20 rounded-full bg-green-400" />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black p-2 text-white sm:p-3">
      <div className="flex gap-3 pb-24">
        <Sidebar />

        <main className="min-w-0 flex-1 overflow-hidden rounded-xl bg-gradient-to-b from-emerald-950/60 via-zinc-900 to-zinc-900 p-4 sm:p-6 lg:p-8">
          <Header />

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Good morning
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {playlists.slice(0, 6).map((playlist) => (
                <QuickPlaylist
                  key={playlist.id}
                  playlist={playlist}
                />
              ))}
            </div>
          </section>

          <MusicSection
            title="Made for you"
            items={playlists}
          />

          <MusicSection
            title="Recently played"
            items={recentlyPlayed}
          />

          <section className="mt-10 rounded-xl bg-white/5 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Your music, your mood
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Find your next favorite sound.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400">
              Discover playlists for studying, relaxing, working out,
              and everything in between.
            </p>
          </section>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}