import { univ } from "./utils/export";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main className="relative mt-[25vh] top-[-10%]">
      <h1 className="font-medium text-center uppercase text-4xl">Universities</h1>

      {/* <div className=""> */}
        {univ.map((univs, index) => {
          return <Cards key={index} {...univs} />;
        })}
      {/* </div> */}
    </main>
  );
}
