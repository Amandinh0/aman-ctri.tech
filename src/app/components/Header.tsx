import HangmanContainer from "./Hangman/HangmanContainer";

const Header: React.FC = () => {
    return(
        <>
        <div className="flex flex-col sm:w-full w-[95%] mx-auto">
            <h1 className="text-lg font-serif">
                Hello 👋, I am Aman Chhetri, currently an Junior Computer Science Student at the University of Massachusetts Amherst. 
                I love creating applications that make a positive effect on the world. You can reach me at amanchhetricr7@gmail.com. <strong>Try out my Tech Based Hangman Game!</strong>
                
            </h1>
            {/* <div className="flex flex-col items-center gap-2">
                <HangmanContainer />
            </div> */}
        </div>
        </>
    ) 
};

export default Header;