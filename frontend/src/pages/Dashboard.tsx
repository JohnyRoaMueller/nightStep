import { useEffect, useState } from 'react';
import Base from '../components/base/base';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [role, setRole] = useState(null);
  const navigateTo = useNavigate();

  const apiUrl = import.meta.env.VITE_APP_API_URL

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`${apiUrl}/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        credentials: 'include'
      })
      if (result.ok) 
      {
        const resultJSON = await result.json();
        setRole(resultJSON.role)
        console.log("role check: " + role)
      }
      if (!result.ok)
      {
        navigateTo("/login")
      }
    }
    fetchData()
  })

  console.log(role)


  if (role === "HOST") {
  return (
    <>
      <Base>
        {/* ↓↓↓ My Content ↓↓↓ */}
        my dashboard Content
        {/* ↑↑↑ My Content ↑↑↑ */}
      </Base>
    </>
    );
  } else {
    navigateTo("/login")
  }
}