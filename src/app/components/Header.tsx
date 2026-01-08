import { BackpackIcon } from "@radix-ui/react-icons";
import HangmanContainer from "./Hangman/HangmanContainer";
import Resume from "./Resume";

const Header: React.FC = () => {
    return(
        <>
        <div className="flex flex-col sm:w-full w-[95%] mx-auto">
            <h1 className="text-lg">
                CompSci Student @ UMass Amherst (May 2026). Interested in full stack development and backend systems.
                <br/>
            </h1>
            <h1 className="text-lg">
                Check out my Lastest Resume here:{" "}
          <a href="/resume" rel="noopener noreferrer" className="inline-flex items-center ml-1">
            <BackpackIcon className='custom-text h-5 w-5 hover:scale-110 transition-transform'/>
          </a>
            </h1>

            <h1 className="text-lg">
                Try out my Tech Based Hangman Game 🎮
            </h1>
        </div>
        </>
    ) 
};

export default Header;