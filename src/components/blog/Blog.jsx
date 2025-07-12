import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    console.log(blog);
    const {author_name, author_img, banner_img, post_date, hashtag, title, reading_duration} = blog;
    return (
        <div>
            <h1>Title: {title}</h1>
            <p>{hashtag}</p>
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object
}

export default Blog;