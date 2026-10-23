import { Play } from "lucide-react";

export default function PlaylistCard({ playlist }) {
  return (
    <article className="group rounded-lg bg-white/5 p-3 transition hover:bg-white/10">
      <div className="relative">
        <img
          src={playlist.image}
          alt={playlist.title}
          className="aspect-square w-full rounded-md object-cover"
        />

        <button
          aria-label={`Play ${playlist.title}`}
          className="absolute bottom-2 right-2 translate-y-2 rounded-full bg-green-400 p-3 text-black opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Play size={20} fill="black" />
        </button>
      </div>

      <h3 className="mt-3 truncate font-bold">
        {playlist.title}
      </h3>

      <p className="mt-1 line-clamp-2 text-sm text-gray-400">
        {playlist.description}
      </p>
    </article>
  );
}