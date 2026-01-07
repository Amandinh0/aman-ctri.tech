import { BackpackIcon, StarIcon, TriangleRightIcon } from "@radix-ui/react-icons";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="custom-text text-3xl font-bold font-serif">About me</h3>
      <ul className="font-serif text-lg ml-6">
        <li className="flex items-start ">
          <TriangleRightIcon className="mr-2 h-6 w-6 flex-shrink-0 pt-2"/> 
          Past summer I interned  as a Software Engineer at Chewy. I worked on Team Canada 🇨🇦 where I helped deploy two essential services to production.
        </li>
        <li className="flex items-start ">
          <TriangleRightIcon className="mr-2 h-6 w-6 flex-shrink-0 pt-2"/> 
           During my time at UMass, I work as a Software Engineer at the student run organization called Build UMass.
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
