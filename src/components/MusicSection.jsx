import PlaylistCard from "./PlaylistCard";

export default function MusicSection({ title, items }) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">
          {title}
        </h2>

        <button className="text-sm font-semibold text-gray-400 hover:text-white">
          Show all
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => (
          <PlaylistCard key={item.id} playlist={item} />
        ))}
      </div>
    </section>
  );
}