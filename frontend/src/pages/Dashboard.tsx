import { useEffect, useState } from 'react';
import Base from '../components/base/base';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const [role, setRole] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('http://192.168.178.28:8080/api/me', {
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