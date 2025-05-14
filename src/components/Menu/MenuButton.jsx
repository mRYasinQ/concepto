import { Button } from '../Button';

import { MenuIcon } from '../../icons/MenuIcon';

export const MenuButton = ({ btnRef, onClick }) => {
    return (
        <div className="block lg:hidden">
            <Button
                type="icon"
                style="fill"
                color="grey"
                size="40"
                corners="squered"
                rightIcon={<MenuIcon />}
                btnRef={btnRef}
                onClick={onClick}
            ></Button>
        </div>
    );
};
