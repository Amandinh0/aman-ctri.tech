import { StarIcon, TriangleRightIcon } from "@radix-ui/react-icons";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="custom-text text-xl font-bold font-serif">About me</h3>
      <ul className="font-serif text-lg ml-6">
        <li className="flex items-start ">
          <TriangleRightIcon className="mr-2 h-6 w-6 flex-shrink-0 pt-2"/> 
          I am currently a SWE fellow at Headstarter and working as a Technical Support Specialist at my local City Hall (Malden MA).
          I have previously interned as a Software Engineer at an Educational Tech Startup called EdWorldo.
        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-6 w-6 flex-shrink-0 pt-2"/> 
          Some classes that I have loved: Computer Systems Programming, Statistics, Discrete Math, and Data Structures in C.
        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-6 w-6 flex-shrink-0 pt-2"/> 
          I love playing soccer ⚽️, guitar 🎸 and reading occasionally. Big Liverpool fan.
        </li>
      </ul>
    </div>
  );
}
