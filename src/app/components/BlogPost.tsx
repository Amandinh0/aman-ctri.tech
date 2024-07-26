import Link from 'next/link';
import React from 'react';

interface BlogPostProps {
    blog: {
      title: string;
      date: string;
      description: string;
      slug: string
      
    };
  }

const BlogPost: React.FC<BlogPostProps> = (props) => {
    const {blog} = props
  return (
    <Link href={`/blog/${blog.slug}`}>
        <div className='post'>
            <div className='flex flex-row justify-between'>
            <h3 className='text-m font-bold font-serif custom-text'>{blog.title}</h3>
            <h3 className='text-m font-bold font-serif'>{blog.date}</h3>
            </div>
            <h3 className='text-m font-serif'>{blog.description}</h3>
        </div>
    </Link>
  );
}

export default BlogPost;