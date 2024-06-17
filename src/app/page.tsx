import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <section className="container p-5">
      <h2 className="text-lg font-medium">Popular Movies</h2>
      <div className="mt-4 grid grid-cols-2 gap-5">
        <article className="relative h-[224px] overflow-hidden rounded-xl border-2">
          {/* <Image fill src="/images/furiosa.jpg" alt="Hero" style={{ height: "auto" }} /> */}
          <img
            src="/images/furiosa.jpg"
            alt="Hero"
            className="object-fill"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </article>
        <article className="relative h-[224px] overflow-hidden rounded-xl border-2">
          <img
            src="/images/avengers.jpg"
            alt="Hero"
            className="object-fill"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </article>
      </div>
    </section>
  );
}
