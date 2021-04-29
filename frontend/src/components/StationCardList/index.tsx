import { FC } from "react";
import { Card } from "@/components/Card";
import { AutoGrid } from "@/components/AutoGrid";
import { Placeholder } from "@/components/Placeholder";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useFavorites } from '@/lib/hooks/useFavorites';
import { useStations, useStationsByUUID } from '@/graphql/hooks';
import { station_bool_exp } from "@/genql";

export type CardList = {
  list: any[];
};

export const CardList: FC<CardList> = ({ list }) => {
  const { load } = usePlayer();
  const { add, remove, isFaved } = useFavorites();

  return (
    <AutoGrid>
      {list.map((item) => (
        <Card
          key={[item.url, item.id].join()}
          hash={item.id}
          title={item.name}
          subtitle={item.country.name}
          onPlay={() => load(item)}
          onFaved={() => add(item.id)}
          onUnFaved={() => remove(item.id)}
          isFaved={isFaved(item.id)}
        />
      ))}
    </AutoGrid>
  );
};

export type StationCardList = {
  where?: station_bool_exp;
};

export const StationCardList: FC<StationCardList> = ({ where }) => {
  const { data, error } = useStations({ where, station: { name: true, url: true, stream: true, id: true, country: { name: true } } });

  if (error) return <p>Error</p>;
  if (!data && !error) return <Placeholder />;

  return <CardList list={data} />;
};

export type StationCardFavs = { uuids: string[]; };

export const StationCardFavs: FC<StationCardFavs> = ({ uuids }) => {
  const { data, error } = useStationsByUUID({ uuids, station: { name: true, url: true, stream: true, id: true, country: { name: true } } });

  if (error) return <p>Error</p>;
  if (!data && !error) return <Placeholder />;

  return <CardList list={data} />;
};