import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export async function GET() {
  const blogsDirectory = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(blogsDirectory);
  
  const blogs = files.map((filename) => {
    const fileContents = fs.readFileSync(path.join(blogsDirectory, filename), 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: filename.replace('.md', '')
    };
  });
  
  return NextResponse.json(blogs);
} 