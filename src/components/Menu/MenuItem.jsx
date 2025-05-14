export const MenuItem = ({ title, link }) => {
    return (
        <li className="button-md text-neutral-gray-800 flex h-10 items-center">
            <a href={link}>{title}</a>
        </li>
    );
};
