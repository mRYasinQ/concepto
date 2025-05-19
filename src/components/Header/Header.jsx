import { useRef, useState } from 'react';

import { MenuButton } from '../Menu/MenuButton';
import { Logo } from '../Logo';
import { SearchBox } from './SearchBox';
import { HeaderButtons } from './HeaderButtons';
import { Menu } from '../Menu';

export const Header = () => {
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);

    const [isLogged, setIsLogged] = useState(false);

    return (
        <header className="border-neutral-gray-100 border-b py-3 md:py-4.5 lg:border-none lg:py-6">
            <div className="container">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                        <div className="flex w-full items-center justify-start gap-3 lg:gap-6">
                            <MenuButton btnRef={menuBtnRef} />
                            <Logo type="primary" />
                            <div className="hidden lg:block">
                                <SearchBox />
                            </div>
                        </div>
                        <HeaderButtons isLogged={isLogged} setIsLogged={setIsLogged} />
                    </div>
                    <div>
                        <Menu menuRef={menuRef} />
                        <div className="block w-full lg:hidden">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
