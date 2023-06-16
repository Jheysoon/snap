import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { useMemo, useState } from "react";

import { ProductItem, SearchTextField } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { Item } from "../../types/item";

export const Home = () => {
  const [sortedHighToLow, setSortedHighToLow] = useState<boolean>(false);
  const { list } = useAppSelector((state) => state.product);

  const handleSorting = () => {
    setSortedHighToLow(true);
  };

  const products = useMemo(() => {
    if (sortedHighToLow === true) {
      const items = [...list];

      items.sort((a, b) => {
        return b.unitPrice - a.unitPrice;
      });

      return items;
    }

    return list;
  }, [list, sortedHighToLow]);

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ mx: 8 }}>
            <SearchTextField />

            <Stack flexDirection="row-reverse" sx={{ marginTop: 2 }}>
              <Button onClick={handleSorting}>Sort price high to low</Button>
            </Stack>

            {products.map((product: Item) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
