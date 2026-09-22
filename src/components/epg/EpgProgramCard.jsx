import React from "react";
import { formatTime } from "../../utils/formatters";

export const EpgProgramCard = ({ program }) => {
  return (
    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
      <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
        <span>
          {formatTime(program.start)} - {formatTime(program.stop)}
        </span>
      </div>
      <h5 className="text-sm font-semibold text-zinc-200">{program.title}</h5>
      <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
        {program.description}
      </p>
    </div>
  );
};
