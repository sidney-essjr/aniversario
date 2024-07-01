import Carousel from "./components/Carousel";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Player from "./components/Player";
import { image, music } from "./components/helpers/data";

function App() {
  return (
    <>
      <Header />
      <main>
        <Player data={music} />
        <Carousel data={image} />
        <Counter />
      </main>
    </>
  );
}

export default App;
