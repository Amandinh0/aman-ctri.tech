import Link from "next/link";
import AboutMe from "./components/AboutMe";


export default function Home() {

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="flex ">
        <AboutMe/>
      </div>
    </div>
  );
}
