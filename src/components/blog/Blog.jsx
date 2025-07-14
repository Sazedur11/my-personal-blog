import PropTypes from 'prop-types'; 
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddBookmark}) => {
    
    const {author_name, author_img, banner_img, post_date, hashtag, title, reading_duration} = blog;
    return (
        <div className='border-b-1 border-gray-300 mb-8'>
            <img className='rounded-[5px]' src={banner_img} alt="Banner Image" />
            <div className='flex items-center justify-between my-4'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="Author Image" />
                    <div>
                        <h3 className='font-bold'>{author_name}</h3>
                        <p className='text-gray-400'>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-gray-400'>{reading_duration} min read</span>
                    <button 
                    onClick={ () => handleAddBookmark(blog)} 
                    className='text-gray-400 ml-2'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h1 className='text-2xl font-bold my-2'>{title}</h1>
            <p className='text-gray-400'><small>{hashtag}</small></p>
            <button className='underline text-[#6047EC] mb-4'><small>Mark as read</small></button>
            
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object
}

export default Blog;