import { StarIcon } from "@radix-ui/react-icons"

export default function AboutMe(){
    return (
        <div className="flex flex-col items-start">
        <h3 className="flex text-xl font-bold font-serif">About me</h3>
        <ul className="font-serif text-lg ml-6 mt-3">
            <li className="flex items-start"> 
            <StarIcon className="mr-3 h-7 w-7"/> 
                
                I have previously interned as a Software Engineer at a Educational Tech Startup called EdWorldo. 
                This summer I am working as a IT intern at the Flimbuilding department of the Malden City Hall, MA.
                
                </li>
            <li  className="flex items-start">
            <StarIcon className="mr-3 mt-2"/> 
                Some classes that I have loved: Computer Systems, Statistics, Dicrete Math and Data Structures in C. 
                </li>
            <li className="flex">
            <StarIcon className="mr-3 mt-2"/> 
                I love playing soccer ⚽️, guitar 🎸 and reading occasionally. Big Liverpool fan.
            </li>
        </ul>
        </div>
    )
}
