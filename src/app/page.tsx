import AboutMe from "./components/AboutMe";
import getBlogMetadata from '../../utils/getBlogMetadata'
import BlogList from "./components/BlogList";

export default function Home() {
  const blogsMetadata = getBlogMetadata('blogs')

  return (
    <div className="sm:w-full w-[95%] mx-auto">
      <div className="flex flex-col">
        <AboutMe/>
        <BlogList/>
      </div>
    </div>
  );
}

