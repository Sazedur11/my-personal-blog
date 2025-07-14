import Bookmark from '../bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="md:w-1/3 bg-gray-100 p-8 rounded-xl">
            <h2 className='text-xl font-bold mb-2'>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;