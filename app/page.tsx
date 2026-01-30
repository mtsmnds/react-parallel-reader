'use client';

import React, { useState } from "react";
import ParallelReader from "./components/ParallelReader";
import Bookshelf from "./components/Bookshelf";

export default function Home() {
  const [selectedBooks, setSelectedBooks] = useState<string[] | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      {selectedBooks ? (
        <ParallelReader
          initialUrls={selectedBooks}
          onBack={() => setSelectedBooks(null)}
        />
      ) : (
        <Bookshelf onSelectCollection={setSelectedBooks} />
      )}
    </main>
  );
}
