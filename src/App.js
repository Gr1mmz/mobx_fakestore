import { observer } from 'mobx-react-lite';
import Header from './components/Header';
import Products from './components/Products';

const App = observer(() => {
  return (
    <>
      <Header />
      <Products />
    </>
  );
});

export default App;
