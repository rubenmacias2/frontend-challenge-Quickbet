/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import Carousel from "./components/Carousel";
import FilterDrawer from "./components/FilterDrawer";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <FilterDrawer
        conten={
          <div>
            <Carousel title={"Popular"} url={"/movie/popular?language=es-MX"} />
            <Carousel
              title={"Now playing"}
              url={"/movie/now_playing?language=es-MX"}
            />
            <Carousel
              title={"Upcoming"}
              url={"/movie/upcoming?language=es-MX"}
            />
            <Carousel
              title={"Top rated"}
              url={"/movie/top_rated?language=es-MX"}
            />
          </div>
        }
      />
    </div>
  );
}
