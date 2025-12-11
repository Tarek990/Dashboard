"use client";
import { useEffect, useState } from "react";

export default function Menu() {
  const [name, setName] = useState("");
  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("Name");

    if (storedName) {
      setName(storedName);
      setHasUser(true);
    }
  }, []);

  const clear=()=>{
    localStorage.clear()
    setName("")
    setHasUser(false)
  }

  return (
    <div className="container">
      <div className="user">
        <img src="/user.jpg" alt="user" width={70} height={70} />
        <h2 className="text-black">{name || "Guest"}</h2>
      </div>

      <ul className="menu bg-red-50">

        <li className="active">
          <a href="/">
            <i className="fa-solid fa-house"></i>
            <p className="p-dashboard">dashboard</p>
          </a>
        </li>

        <li>
          <a href="/users">
            <i className="fa-solid fa-user-group"></i>
            <p>users</p>
          </a>
        </li>

        <li>
          <a href="/products">
            <i className="fa-solid fa-newspaper"></i>
            <p>products</p>
          </a>
        </li>

        <li>
          <a href="/charts">
            <i className="fa-solid fa-chart-pie"></i>
            <p>Charts</p>
          </a>
        </li>

        <li>
          <a href="/Posts">
            <i className="fa-solid fa-pen"></i>
            <p>Posts</p>
          </a>
        </li>

        <li>
          <a href="/Settings">
            <i className="fa-solid fa-gear"></i>
            <p>Settings</p>
          </a>
        </li>

        
        {hasUser && (
          <li className="log-out">
            <a href="#" onClick={clear}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Logout</p>
            </a>
          </li>
        )}

       
        {!hasUser && (
          <li className="sign-up">
            <a href="/sign-up">
              <i className="fa-solid fa-user-plus"></i>
              <p>Sign up</p>
            </a>
          </li>
        )}

      </ul>
    </div>
  );
}
