/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import { useEffect, useState } from "react";
import RatingCircular from "./RatingCircular";
import ButtonLike from "./ButtonLike";
interface PopularMovie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}
export default function Cover(): JSX.Element {
  const [data, setData] = useState<PopularMovie | null>(null);
  const aletorie = Math.floor(Math.random() * 20);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/movie/popular?language=es-MX",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          },
        );
        setData((await response.json()).results[aletorie]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <img
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt={"cover"}
        src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80%",
          backgroundImage: "linear-gradient(to top, black, transparent)",
          color: "white",
          display: "flex", // Asegúrate de que el contenedor use flexbox
          flexDirection: "column", // Establece la dirección de los elementos
        }}
      >
        <div
          style={{
            marginTop: "auto",
            padding: "5vh",
            display: "flex",
            justifyContent: "space-between",
            gap: "5vh",
          }}
        >
          <div>
            <h1>{data?.title}</h1>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5vh",
              }}
            >
              <h4>{data?.overview}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5vh",
                }}
              >
                <ButtonLike value={false} size={"large"} />
                <RatingCircular value={data?.vote_average} size={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
