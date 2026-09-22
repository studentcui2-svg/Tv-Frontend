import React from "react";
import { useEpg } from "../../hooks/useEpg";
import { EpgProgramCard } from "./EpgProgramCard";
import { Loader } from "../common/Loader";

export const EpgTimeline = () => {
  const { programs, loading } = useEpg();

  if (loading) {
    return (
      <div className="p-4 flex justify-center">
        <Loader size="sm" />
      </div>
    );
  }

  if (!programs.length) {
    return (
      <div className="p-4 text-center text-xs text-zinc-600">
        No Electronic Program Guide (EPG) metadata available for this channel.
      </div>
    );
  }

  return (
    <div className="space-y-2 p-2">
      {programs.map((prog, idx) => (
        <EpgProgramCard key={idx} program={prog} />
      ))}
    </div>
  );
};
