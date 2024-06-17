import Image from "next/image";

export default function Home() {
  return (
    <section className="container gap-5 p-5">
      <h2 className="text-lg font-medium">Popular Movies</h2>
      <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-4">
        <article className="relative h-[224px] overflow-hidden rounded-xl border-2">
          <Image
            src="/images/furiosa.jpg"
            alt="Hero"
            className="object-fill"
            width={300}
            height={224}
          />
        </article>
        <article className="relative h-[224px] overflow-hidden rounded-xl border-2">
          <Image
            src="/images/avengers.jpg"
            alt="Hero"
            className="object-fill"
            width={300}
            height={224}
          />
        </article>
      </div>
    </section>
  );
}
