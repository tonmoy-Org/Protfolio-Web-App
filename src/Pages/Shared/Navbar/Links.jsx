import ActiveLink from "../../../component/ActiveLink/ActiveLinks";

const Links = ({ route, onClick }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <div className='py-3 font-semibold hover:text-[#3B82F6] duration-150 border border-[#eaeaea] ps-5 bg-[#fafafa] lg:border-none lg:ps-0 lg:bg-transparent'>
                <ActiveLink to={route.path}>
                    <p onClick={handleClick}>{route.name}</p>
                </ActiveLink>
        </div>

    );
};

export default Links;