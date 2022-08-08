import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import products from "./store/products";

const App = observer(() => {
  useEffect(() => {
    products.fetchProducts();
  }, []);

  return (
    <>
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
