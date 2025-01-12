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
            <h2 className='text-3xl font-bold font-serif mb-2 custom-text'>Projects/Publications:</h2>
            {blogMetadata.map((blog, blogIndex) => {
                return(
                    <div className="bg-[var(--card-bg)] hover:bg-[var(--container-bg)] transition-colors postCard mb-1 hover:scale-[1.02] transition-transform hover:bg-gray-100 rounded-lg p-1" key={blog.slug}>
                        <BlogPost key={blogIndex} blog={blog}/>
                    </div>
                )
            })}

        </div>
    );
}

export default BlogList;
