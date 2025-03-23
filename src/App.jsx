import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import './App.css';

const App = () => {
  // Create stars effect
  // useEffect(() => {
  //   const starsContainer = document.createElement('div');
  //   starsContainer.className = 'stars';
  //   document.body.appendChild(starsContainer);
    
  //   for (let i = 0; i < 100; i++) {
  //     const star = document.createElement('div');
  //     star.className = 'star';
  //     star.style.left = `${Math.random() * 100}%`;
  //     star.style.top = `${Math.random() * 100}%`;
  //     star.style.width = `${Math.random() * 3}px`;
  //     star.style.height = star.style.width;
  //     star.style.animationDelay = `${Math.random() * 5}s`;
  //     starsContainer.appendChild(star);
  //   }
    
  //   // Add floating crewmates in the background
  //   const colors = ['#ef233c', '#3a86ff', '#43aa8b', '#f94144', '#f8961e', '#90be6d', '#577590'];
    
  //   for (let i = 0; i < 5; i++) {
  //     const crewmate = document.createElement('div');
  //     crewmate.className = 'floating-crewmate';
  //     crewmate.style.left = `${Math.random() * 100}%`;
  //     crewmate.style.animationDelay = `${Math.random() * 10}s`;
      
  //     const color = colors[Math.floor(Math.random() * colors.length)];
      
  //     crewmate.innerHTML = `
  //       <div style="position: absolute; width: 100%; height: 85%; background-color: ${color}; border-radius: 30px 30px 25px 25px; bottom: 0;"></div>
  //       <div style="position: absolute; width: 60%; height: 30%; background-color: #8adbf0; border-radius: 5px 15px 5px 5px; top: 25%; left: 50%; border: 3px solid #b5b5b5;"></div>
  //     `;
      
  //     document.body.appendChild(crewmate);
  //   }
    
  //   return () => {
  //     document.body.removeChild(starsContainer);
  //     document.querySelectorAll('.floating-crewmate').forEach(el => document.body.removeChild(el));
  //   };
  // }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <h1 className="title">AMONG US</h1>
        </div>
      </div>
    
  );
};

export default App;