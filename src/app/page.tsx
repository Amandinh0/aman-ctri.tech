import AboutMe from "./components/Experience";
import getBlogMetadata from '../../utils/getBlogMetadata'
import BlogList from "./components/BlogList";
import HangmanContainer from "./components/Hangman/HangmanContainer";

export default function Home() {
  const blogsMetadata = getBlogMetadata('blogs')

  return (
    <div className="sm:w-full w-[95%] mx-auto">
      <div className="flex flex-col">
        <HangmanContainer/>
        <AboutMe/>
        <BlogList/>
      </div>
    </div>
  );
}

