import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-orange-500 p-3 mr-2">
      <button onClick={() => { setCount(count - 1); }}>-</button>
      <span>{count}</span>
      <button onClick={() => { setCount(count + 1); }}>+</button>
    </div>
  );
};

export default ProductCounter;
