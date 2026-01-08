import { TriangleRightIcon } from "@radix-ui/react-icons";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="custom-text text-3xl font-bold mb-3">About me</h3>
      <ul className="text-lg ml-6 space-y-2">
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1" />
          SWE intern at Chewy, working in production codebases.
        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1" />
          Software Engineer at the student run organization - Build UMass.
        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1" />
          Some classes that I have loved 📚: Computer Systems Programming, Operating Systems, Statistics and Probability, Algorithm Analysis, Discrete Math, and Data Structures in C.
        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1" />
          I love playing soccer ⚽️, guitar 🎸 and reading occasionally. Big Liverpool fan.
        </li>
      </ul>
    </div>
  );
}
