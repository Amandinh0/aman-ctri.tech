import * as fs from 'fs';
import * as matter from 'gray-matter';

export default function getBlogMetadata(basePath){
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    //get file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return{
            title: matterResult.data.title,
            date: matterResult.data.date,
            description: matterResult.data.description,
            slug: filename.replace('.md', '') 
        }
    })
    return posts

}

 