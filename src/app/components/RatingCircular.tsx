import { CircularProgress, Box, Typography } from "@mui/material";

interface RatingCircularProps {
  value: number;
  size: number;
}

const RatingCircular: React.FC<RatingCircularProps> = ({ value, size }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        size={size}
        sx={{
          color: () => {
            if (Math.round(value * 10) < 50) {
              return "red";
            }
            if (Math.round(value * 10) > 50 && Math.round(value * 10) < 70) {
              return "orange";
            }
            return "green";
          },
        }}
        value={value * 10}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div">
          {`${Math.round(value * 10)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default RatingCircular;
