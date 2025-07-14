

import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  };

  const handleReadingTime = time =>{
    // console.log(readingTime + time)
    setReadingTime(readingTime + time)
  }
  
  return (
    <>
      <Header></Header>
      <div className='md:flex md:w-4/5 mx-auto gap-6'>
        <Blogs 
          handleAddBookmark={handleAddBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks 
          bookmarks={bookmarks}
          readingTime={readingTime}
          ></Bookmarks>
      </div>
    </>
  )
}

export default App
