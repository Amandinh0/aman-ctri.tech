
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
        <div className='flex flex-col'>
            <h2 className='text-lg font-bold font-serif mb-4 custom-text'>Projects/Publications:</h2>
            {blogMetadata.map((blog, blogIndex) => {
                return(
                    <div className='postCard mb-4 mt-4'>
                    <BlogPost key={blogIndex} blog={blog}/>
                    </div>
                )
            })}

        </div>
    );
}

export default BlogList;
