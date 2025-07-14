import Bookmark from '../bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className="md:w-1/3 ">
            <div className='bg-gray-100 rounded-xl p-4 mb-4 border-1 border-indigo-600'>
                <h2 className='text-indigo-600 font-bold text-center'>Spent time on read: {readingTime} min</h2>
            </div>
            <div className='bg-gray-100 p-8 rounded-xl'>
                <h2 className='text-xl font-bold mb-2'>Bookmarks: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></  Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;