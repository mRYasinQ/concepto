import { Icon } from '../Icon';

import { SearchIcon } from '../../icons/SearchIcon';

export const SearchBox = () => {
    return (
        <div className="bg-neutral-gray-100 text-neutral-gray-500 flex h-10 w-full items-center gap-2 rounded-xl lg:h-12 lg:w-[25rem]">
            <div className="relative right-3 [&_svg]:w-5 md:[&_svg]:w-5.5 lg:[&_svg]:w-6">
                <Icon>
                    <SearchIcon />
                </Icon>
            </div>
            <input
                className="button-md md:button-lg lg:button-xlg placeholder:text-neutral-gray-500 h-full w-full border-none p-3 outline-none"
                type="text"
                placeholder="جستجو کسب و کار"
            />
        </div>
    );
};
