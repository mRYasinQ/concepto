import { MenuList } from './MenuList';

export const Menu = ({ menuRef }) => {
    return (
        <nav ref={menuRef} className="hidden lg:block">
            <MenuList />
        </nav>
    );
};
