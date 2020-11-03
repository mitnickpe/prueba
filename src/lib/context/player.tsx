import {
  useMemo,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { Station } from "@/lib/graphql/gqless";

export type PlayerState = {
  error: boolean;
  paused: boolean;
  loading: boolean;
  playing: boolean;
  station: Station;
};

export type PlayerContext = {
  state: PlayerState;
  setState: Dispatch<SetStateAction<PlayerState>>;
};

export const PlayerContext = createContext<PlayerContext>(null);

export const PlayerProvider = ({ children }) => {
  const [state, setState] = useState<PlayerState>({
    error: false,
    paused: false,
    loading: false,
    playing: false,
    station: null,
  });

  const value = useMemo(() => ({ state, setState }), [state, setState]);

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
