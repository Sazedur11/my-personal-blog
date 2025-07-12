import profile from '../assets/profile.png'

const Header = () => {
    return (
        <div className="flex justify-between items-center py-4 mx-auto my-4 border-b-1 border-gray-200 w-4/5 h-auto">
            <h1 className='text-xl font-bold p-3'>My Blogs</h1>
            <img src={profile} alt="Image" />
        </div>
    );
};

export default Header;