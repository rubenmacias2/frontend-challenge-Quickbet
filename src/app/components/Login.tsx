/* eslint-disable @typescript-eslint/naming-convention */
import { Button, TextField, Box, Typography } from "@mui/material";

interface LoginProps {
  clicker: () => void;
}

export default function Login({ clicker }: LoginProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Typography variant="h6" component="h1" gutterBottom>
        We love haveing you back
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          id="Email"
          label="Email"
          variant="outlined"
          required
          sx={{
            color: "white",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
                color: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
                color: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
                color: "white",
              },
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
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          required
          sx={{
            color: "white",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
                color: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
                color: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
                color: "white",
              },
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
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f0b90b",
            color: "white",
            "&:hover": {
              backgroundColor: "#efc034",
            },
          }}
          onClick={clicker}
          fullWidth
        >
          Continue
        </Button>
      </form>
    </Box>
  );
}
