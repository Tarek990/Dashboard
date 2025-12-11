"use client"

import { useState } from "react";

export default function Posts() {
  const [posts] = useState([
    { title: "First Post", author: "Tarek", status: "Published" },
    { title: "Dashboard Design", author: "Ahmed", status: "Draft" },
    { title: "React Tips", author: "Sara", status: "Published" },
    { title: "First Post",        author: "Tarek",      status: "Published" },
    { title: "Second Post",       author: "Sarah",      status: "Draft" },
    { title: "Third Post",        author: "Omar",       status: "Published" },
    { title: "Fourth Post",       author: "Nora",       status: "Archived" },
    { title: "Fifth Post",        author: "Tarek",      status: "Published" },
    { title: "Sixth Post",        author: "Mona",       status: "Draft" },
    { title: "Seventh Post",      author: "Ahmed",      status: "Published" },
    { title: "Eighth Post",       author: "Lina",       status: "Published" },
    { title: "Ninth Post",        author: "Tarek",      status: "Draft" },
    { title: "Tenth Post",        author: "Khaled",     status: "Published" },
    { title: "Eleventh Post",     author: "Yara",       status: "Archived" },
    { title: "Twelfth Post",      author: "Tarek",      status: "Published" },
    { title: "Thirteenth Post",   author: "Rana",       status: "Draft" }
  ]);

  return (
    <div className="posts-page">
      <div className="posts-header">
        <h2>Posts</h2>
        <button className="add-post">+ Add Post</button>
      </div>

      <div className="posts-table-box">
        <table className="posts-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>
                  <span className={`status ${post.status.toLowerCase()}`}>
                    {post.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
