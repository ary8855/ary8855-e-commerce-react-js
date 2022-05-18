import { useState } from "react";
import Box from "@mui/material/Box";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    count < stock
      ? setCount(count + 1)
      : alert(`Sorry, we only have ${stock} in stock`);
  };
  const handleDecrease = () => {
    count > initial
      ? setCount(count - 1)
      : alert(`Sorry, you can't have less than ${initial}`);
  };

  return (
    <>
      <Box
        sx={{
          border: ".1rem solid black",
          borderRadius: "1rem",
          p: "1rem",
          width: "fit-content",
        }}
      >
        <h2>Stock: {stock}</h2>        
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={() => handleIncrease()}>Increase</Button>
          <Button variant="outlined" onClick={() => handleDecrease()}>Decrease</Button>
          <Button variant="outlined" onClick={() => setCount(initial)}>Reset</Button>
          <Button variant="contained" onClick={() => onAdd(count)}>Add to Cart</Button>
        </Stack>
        <h3>Item Count: {count}</h3>
      </Box>
    </>
  );
}
