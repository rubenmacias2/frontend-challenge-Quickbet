/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BasicAppBar from "../components/BasicAppBar";
import Cover from "./Cover";

interface Genres {
  id: number;
  name: string;
}

const FilterDrawer = ({ conten }) => {
  const [genres, setGenres] = useState<Genres[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/genre/movie/list?language=es-MX",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          },
        );
        const { genres } = await response.json();
        setGenres(genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <BasicAppBar />
      </Box>
      <div>
        <Cover />
      </div>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "#262626",
            color: "white",
            width: "40vh",
          }}
        >
          <Box
            sx={{
              overflow: "auto",
              background: "#1C1C1C",
              margin: "1vh",
              height: "80vh",
            }}
          >
            <Typography variant="h6">Search</Typography>
            <TextField
              variant="filled"
              label={"Keywords"}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1B1B1B",
                    color: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "#1B1B1B",
                    color: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1B1B1B",
                    color: "white",
                  },
                  backgroundColor: "#1B1B1B",
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
            <br />
            <Divider orientation="horizontal" flexItem />
            <br />
            <Typography variant="h6">Genres</Typography>
            <List>
              {genres?.map((res) => (
                <ListItem key={res.id} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={res.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box sx={{ width: "85%" }}>{conten}</Box>
      </Box>
    </>
  );
};

export default FilterDrawer;
