import React from 'react';
import getBlogMetadata from '../../../utils/getBlogMetadata';
import BlogPost from './BlogPost';

interface BlogMetadata {
    title: string;
    date: string;
    description: string;
    slug: string;
    
  }

const BlogList: React.FC = () => {
    const blogMetadata: BlogMetadata[] = getBlogMetadata('blogs')


    return (
        <div className='flex flex-col sm:w-full w-[95%] mx-auto'>
            <h2 className='text-3xl font-bold mb-2 py-1 custom-text'>Writeups:</h2>
            {blogMetadata.map((blog, blogIndex) => {
                return(
                    <div className='postCard mb-4 hover:scale-[1.02] transition-transform rounded-lg p-3' key={blog.slug}>
                        <BlogPost key={blogIndex} blog={blog}/>
                    </div>
                )
            })}

        </div>
    );
}

export default BlogList;
