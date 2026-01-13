import React from 'react'
var matter = require('gray-matter');
import getBlogMetadata from '../../../../utils/getBlogMetadata'
import * as fs from 'fs'
import Markdown from "markdown-to-jsx"

function getBlogContent(slug: string){
  const folder = 'blogs/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () =>{
  const blogs = getBlogMetadata('blogs')
  return blogs.map((blog) => ({slug: blog.slug}))
}



export default function blogPage(props: any) {
  const slug = props.params.slug
  const post = getBlogContent(slug)
  //console.log(post)

  return (
    <div className='prose prose-invert max-w-none'>
      <article>
        <Markdown >{post.content}</Markdown>
      </article>
    </div>
  )
}
