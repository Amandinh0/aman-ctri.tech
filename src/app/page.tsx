import Link from "next/link";
import AboutMe from "./components/AboutMe";
import getBlogMetadata from '../../utils/getBlogMetadata'
import BlogList from "./components/BlogList";
import Resume from "./components/Resume";

export default function Home() {
  const blogsMetadata = getBlogMetadata('blogs')

  return (
    <div className="h-screen mx-auto max-w-4xl p-4">
      <div className="flex flex-col ">
        <AboutMe/>
        <BlogList/>
      </div>
    </div>
  );
}
