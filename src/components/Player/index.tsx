import { useContext } from "react";
import { Play, Pause, Square, AlertCircle } from "@geist-ui/react-icons";
import { LineSkeleton } from "@/components/Skeleton";
import { PlayerContext } from "@/lib/context/player";
import { Container, Controls, Title, ErrorNotification, Button } from "./style";

export const Player = () => {
  const { station, play, pause, stop, error, playing, loading } = useContext(
    PlayerContext
  );

  if (!station) return null;

  if (error) {
    return (
      <ErrorNotification>
        <AlertCircle /> <p>Oops, can't play this station :(</p>
      </ErrorNotification>
    );
  }

  return (
    <Container>
      {loading && <LineSkeleton />}
      {!loading && <Title>{station.name}</Title>}
      <Controls>
        {playing && (
          <Button onClick={() => pause()}>
            <Pause />
          </Button>
        )}
        {!playing && (
          <Button onClick={() => play()}>
            <Play />
          </Button>
        )}

        <Button onClick={() => stop()}>
          <Square />
        </Button>
      </Controls>
    </Container>
  );
};
