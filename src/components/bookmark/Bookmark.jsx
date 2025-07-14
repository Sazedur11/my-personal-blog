

const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-white mb-2 rounded-xl p-4">
            <p className="font-semibold">{bookmark.title}</p>
        </div>
    );
};

export default Bookmark;