import ParallelReader from "./components/ParallelReader";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* The ParallelReader handles its own layout and height.
        We simply mount it as the root element.
      */}
      <ParallelReader />
    </main>
  );
}
