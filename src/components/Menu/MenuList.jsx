import { MenuItem } from './MenuItem';

import MenuItems from '../../constants/MenuItems';

export const MenuList = () => {
    return (
        <ul className="flex items-center gap-8 py-2">
            {MenuItems.map(({ title, link }, index) => (
                <MenuItem key={`${title}-${index}`} title={title} link={link} />
            ))}
        </ul>
    );
};
