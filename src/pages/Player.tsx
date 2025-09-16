import { MessageCircle } from "lucide-react";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";

export function Player() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded bg-violet-500 hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden border rounded-lg shadow border-zinc-800 bg-zinc-900 pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute top-0 bottom-0 right-0 overflow-y-scroll border-l divide-y-2 borde-l divide-zinc-900 w-80 border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 ">
            <Module moduleIndex={0} title="Desvendando o Redux" amountOfLessons={3} />
            <Module moduleIndex={1} title="Desvendando o Redux" amountOfLessons={3} />
            <Module moduleIndex={2} title="Desvendando o Redux" amountOfLessons={3} />
          </aside>
        </main>
      </div>
    </div>
  );
}
