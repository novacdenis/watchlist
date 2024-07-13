"use client";

import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/solid";

import { imageLoader } from "../utils";

function MediaTitle({ title, priority }: { title: string; priority: boolean }) {
  return (
    <article className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-purple-500">
      <Image
        fill
        priority={priority}
        src={title}
        alt="Hero"
        sizes="290px, (min-width: 640px) 230px"
        loader={imageLoader}
      />

      <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white shadow">
        <PlusIcon className="h-6 w-6 text-purple-600" />
      </button>
    </article>
  );
}

export { MediaTitle };
