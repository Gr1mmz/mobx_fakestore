import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import products from "./store/products";
import { Box, Heading } from "@chakra-ui/react";

const App = observer(() => {
  useEffect(() => {
    products.fetchProducts();
  }, []);

  return (
    <>
      <Box w="100%" p={4} bg="teal.600" color="#fff">
        <Heading size="md">FakeStore React+Mobx</Heading>
      </Box>
      {products.products.map((item) => {
        return (
          <div key={item.id} style={{ width: "200px" }}>
            <img src={item.image} alt={item.title} style={{ width: "150px" }} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
});

export default App;
