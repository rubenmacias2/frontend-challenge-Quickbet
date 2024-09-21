/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
"use client";

import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import RatingCircular from "./RatingCircular";
import ButtonLike from "./ButtonLike";

interface MoviesFavorites {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export default function MoviesFavorites({ title, url }): JSX.Element {
  const [data, setData] = useState<MoviesFavorites[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        });
        setData((await response.json()).results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <Typography variant="h4" color="white" sx={{ margin: "1vh" }}>
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data?.length > 0 ? (
          data.map((movie) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
              <Card
                sx={{
                  backgroundColor: "#262626",
                  color: "white",
                  margin: "1.5vh",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  sx={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    objectFit: "fill",
                  }}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent sx={{ minHeight: "14vh" }}>
                  <Typography variant="subtitle2">{movie.title}</Typography>
                  <Typography variant="caption">
                    {movie.release_date}
                  </Typography>
                </CardContent>
                <div
                  style={{
                    padding: "2vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10vh",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="caption">favorite</Typography>
                    <ButtonLike value size={"medium"} />
                  </div>
                  <div>
                    <RatingCircular value={movie.vote_average} size={50} />
                  </div>
                </div>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No data available</p>
        )}
      </Grid>
    </div>
  );
}
