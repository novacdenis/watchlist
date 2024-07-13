import { MediaTitle } from "@/features/media/components/media-title";

const titles = ["tt20420628", "tt17279496", "tt11685912", "tt18077924", "tt14539740"];

export default async function Home() {
  return (
    <section className="container grid grid-cols-2 gap-5 p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {titles.map((title, index) => (
        <MediaTitle key={index} title={title} priority={index === 0} />
      ))}

      <form className="aspect-[2/3] overflow-hidden rounded-2xl border border-dashed border-purple-600">
        <label
          htmlFor="file"
          className="flex h-full w-full cursor-pointer items-center justify-center"
        >
          <input id="file" type="file" className="hidden" />
          <span className="text-lg font-medium text-purple-600">Upload</span>
        </label>
      </form>
    </section>
  );
}
