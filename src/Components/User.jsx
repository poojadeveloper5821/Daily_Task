import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function User() {
  const { id } = useParams();
  const { push } = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
      <article>
        <h1>{user.title}</h1>
        <p>{user.body}</p>
        <br />
        <button onClick={() => push("/")}>Go to Back</button>
      </article>
    </>
  );
}

export default User;
