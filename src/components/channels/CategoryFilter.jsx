import React from "react";
import { useChannels } from "../../hooks/useChannels";

export const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useChannels();

  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap border transition ${
            selectedCategory === cat
              ? "bg-indigo-600 text-white border-indigo-500"
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
