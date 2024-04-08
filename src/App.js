import React from 'react';
import Navbar from './components/Navbar';
import Box from './components/Box'; // Import Box component
import Footer from './components/Footer';
import styles from './index.css'; // Import CSS module

function App() {
  const boxes = [
    {
      imageUrl: "https://onextrapixel.com/wp-content/uploads/2024/01/instagram-story-template-for-social-media.png",
      title: "Example Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ligula id malesuada placerat."
    },
    {
      imageUrl: "https://onextrapixel.com/wp-content/uploads/2024/01/art-deco-fonts-design.png",
      title: "Example Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ligula id malesuada placerat."
    },
    {
      imageUrl: "https://onextrapixel.com/wp-content/uploads/2022/11/neon-fonts-design.png",
      title: "Example Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ligula id malesuada placerat."
    }
  ];

  const renderedBoxes = [];
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    renderedBoxes.push(
      <Box
        key={i}
        imageUrl={box.imageUrl}
        title={box.title}
        description={box.description}
      />
    );
  }

  return (
    <>
      <Navbar />
      <h1 className="title container">Currently Browsing: Design</h1>
      <div className="content container">
        {renderedBoxes}
      </div>
      <Footer />
    </>
  );
}

export default App;
