
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex md:w-4/5 mx-auto gap-6'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
