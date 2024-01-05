import { useEffect, useState } from "react";
import axios from "axios";

export default function API() {
  const [users, setUser] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json()) 
  //     .then(data => {
  //       setUser(data);
  //       console.log(data);
  //     })
  //     .catch(error => console.error('Error:', error));
  // }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          name: {user.name} <br />
          username: {user.username} <br />
          email: {user.email}
        </li>
      ))}
    </ul>
  );
}
