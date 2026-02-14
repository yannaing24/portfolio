import { Header } from "./header";
import { Experience } from "./experience";

export const Main = () => {
  return (
    <div className="relative bg-orange-500 p-15 h-[200vh] ">
      <div className="sticky top-0 bg-white h-screen rounded-2xl">
        <Header />
        <Experience />
      </div>
    </div>
  );
};
