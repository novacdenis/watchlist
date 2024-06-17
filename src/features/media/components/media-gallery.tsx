function MediaGallery({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-[calc(100dvh-80px)] w-full items-center justify-center p-5">
      {children}
    </section>
  );
}

export { MediaGallery };
