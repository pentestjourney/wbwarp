// App.tsx or the relevant file
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Whiteboard from "./Components/Whiteboard"; // Ensure this is the correct import path
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import GettingStarted from "./Components/GettingStarted";
 
import Footer from "./Components/Footer";
import { backend } from "./declarations/backend";
// Define your posts data according to the PostItem interface
const postsData = [
  {
    key: 1,
    title: "Exploring the Internet Computer",
    content: "Dive deep into the capabilities...",
    contact: "developer@example.com",
  },
  // other posts
];



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/gettingStarted" element={<GettingStarted />} />
                <Route path="/posts" element={<Whiteboard posts={postsData} />} />
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Footer />
                  </>
                } />
            </Routes>
        </Router>
    );
}

export default App;



