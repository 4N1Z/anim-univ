import { univ } from "./utils/export";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <div>
      <h1>Universities</h1>

      <div>
        {univ.map((univs, index) => {
          return <Cards key={index} {...univs} />;
        })}
      </div>
    </div>
  );
}
