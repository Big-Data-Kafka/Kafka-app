import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
  const navigate= useNavigate();
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between p-4">
          <a href="/" className="text-2xl font-semibold text-white">
            <span>Trendify</span>
          </a>
          <div className="text-white">
            <button className="bg-black py-2 px-2 rounded hover:cursor-pointer" onClick={async () => {
						await fetch("http://localhost:5000/api/logout", {
							method: "POST",
							credentials: "include",
						});
						navigate("/login");
					}}>
              Logout
            </button>
          </div>
        </div>
      </nav>
  )
}

export default AdminNavBar