/* eslint-disable no-duplicate-imports */
/* eslint-disable @typescript-eslint/naming-convention */
"use client ";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
interface ButtonLikeProps {
  value: boolean;
  size: string;
}

const ButtonLike: React.FC<ButtonLikeProps> = ({ value, size }) => {
  const [state, setState] = useState(value);

  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={(): void => {
        state ? setState(false) : setState(true);
      }}
    >
      {state ? (
        <FavoriteIcon fontSize={size} />
      ) : (
        <FavoriteBorderIcon fontSize={size} />
      )}
    </div>
  );
};

export default ButtonLike;
