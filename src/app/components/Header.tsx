import { BackpackIcon } from "@radix-ui/react-icons";
import HangmanContainer from "./Hangman/HangmanContainer";
import Resume from "./Resume";

const Header: React.FC = () => {
    return(
        <div className="flex flex-col sm:w-full w-[95%] mx-auto space-y-4 mb-6">
            <p className="text-xl leading-relaxed">
            Hi 👋, I am a Computer Science major at the University of Massachusetts Amherst (Class of 2026), interested in backend systems, infrastructure, and opensource technologies.            </p>
        </div>
    ) 
};

export default Header;