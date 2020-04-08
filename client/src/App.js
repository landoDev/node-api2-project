import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lambda Blog</h1>
      </header>
      <BlogPosts />
    </div>
  );
}

export default App;
