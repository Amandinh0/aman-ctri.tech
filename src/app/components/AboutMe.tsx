import { BackpackIcon, StarIcon, TriangleRightIcon } from "@radix-ui/react-icons";

export default function AboutMe() {
  return (
    <div className="flex flex-col">
      <h3 className="custom-text text-3xl font-bold font-serif mb-2">
        About me
      </h3>
      <ul className="font-serif text-lg [&>li]:mb-0">
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1"/>
          Past summer, I was an SWE intern at Headstarter. Alongside, I worked as a IT intern at my local City Hall (Malden MA).
          I have previously interned as a Software Engineer at an Educational Tech Startup - EdWorldo.

        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1"/>
          Some classes that I have loved 📚: Computer Systems Programming, Operating Systems, Statistics and Probability, Algorithm Analysis,
          Discrete Math, and Data Structures in C.
        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1"/>
          I love playing soccer ⚽️, guitar 🎸 and reading occasionally. Big Liverpool fan.
        </li>
        <li className="flex items-start">
          <TriangleRightIcon className="mr-2 h-5 w-5 flex-shrink-0 pt-1"/>
          Check out my resume to learn more in depth about my experiences.{" "}
          <a href="/resume" rel="noopener noreferrer" className="inline-flex items-center ml-1">
            <BackpackIcon className='custom-text h-5 w-5 hover:scale-110 transition-transform'/>
          </a>
        </li>
      </ul>
    </div>
  );
}
