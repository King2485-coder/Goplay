// src/context/PlaydatesContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type Playdate = {
  id: string;
  title: string;
  date: string;
  time: string;
  location?: string;
  kids?: string[];
  notes?: string;
  hostName?: string;
};

type PlaydatesContextType = {
  playdates: Playdate[];
  addPlaydate: (data: Omit<Playdate, "id">) => void;
};

const PlaydatesContext = createContext<PlaydatesContextType | undefined>(
  undefined
);

export function PlaydatesProvider({ children }: { children: ReactNode }) {
  const [playdates, setPlaydates] = useState<Playdate[]>([
    {
      id: "1",
      title: "Park meetup",
      date: "Today",
      time: "3:00 PM",
      location: "Neighborhood park",
      kids: ["Ava"],
      notes: "Bring water and snacks",
      hostName: "You",
    },
    {
      id: "2",
      title: "Library story time",
      date: "Tomorrow",
      time: "10:00 AM",
      location: "Downtown library",
      kids: ["Liam"],
      hostName: "Sarah",
    },
  ]);

  const addPlaydate = (data: Omit<Playdate, "id">) => {
    const newPlaydate: Playdate = {
      id: Date.now().toString(),
      ...data,
    };

    setPlaydates((prev) => [newPlaydate, ...prev]);
  };

  return (
    <PlaydatesContext.Provider value={{ playdates, addPlaydate }}>
      {children}
    </PlaydatesContext.Provider>
  );
}

export function usePlaydates() {
  const ctx = useContext(PlaydatesContext);
  if (!ctx) {
    throw new Error("usePlaydates must be used inside PlaydatesProvider");
  }
  return ctx;
}
