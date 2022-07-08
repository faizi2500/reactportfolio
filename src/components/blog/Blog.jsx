import React, { useEffect, useState } from 'react'
import './blog.css'
const query = `
  {
    user(username: "codewithfaizi") {
      publication {
        posts{
          slug
          title
          brief
          coverImage
        }
      }
    }
  }
`;

const Blog = () => {
  const [list, setList] = useState({
    posts: []
  });
  useEffect(() => {
    const getUsers = async () => {
      const blogs = await fetch('https://api.hashnode.com', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify({ query }),
      })
      const apiResponse = await blogs.json();
      setList({
        posts: apiResponse.data.user.publication.posts
      })
    }
    getUsers();
  }, [])

  console.log(list);
  return (
    <section id='blog'>
      <h5>My Recent Blogs</h5>
      <h2>Blogs</h2>
      <div id="" className="portfolio-container">
        {list.posts.map((each, index) => {
          return(
            <article key={index} className="each-project">
              <div className='project-image-container'>
                <img src={each.coverImage} alt="Blogs" className='project-image' />
              </div>
              <div className='project-btns'>
                <p className='project-name'>{each.title}</p>
                <a href={`https://codewithfaizi.hashnode.dev/${each.slug}`} target="_blank" id="github-btn" className='btn btn-primary'>Read More</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Blog