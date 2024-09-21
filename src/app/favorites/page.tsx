/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/naming-convention

import RootLayout from "../layout";
import BasicAppBar from "../components/BasicAppBar";
import MoviesFavorites from "../components/MoviesFavorites";

export default function Favorites(): JSX.Element {
  return (
    <RootLayout>
      <BasicAppBar />
      <MoviesFavorites
        title={"Popular"}
        url={"/movie/popular?language=es-MX"}
      />
    </RootLayout>
  );
}
