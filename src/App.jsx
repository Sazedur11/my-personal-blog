

import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog =>{
    console.log('book mark added soon')
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  
  return (
    <>
      <Header></Header>
      <div className='md:flex md:w-4/5 mx-auto gap-6'>
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
