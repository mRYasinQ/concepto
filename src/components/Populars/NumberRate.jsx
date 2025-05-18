import { Icon } from '../Icon';

import { StarIcon } from '../../icons/StarIcon';

export const NumberRate = ({ rate }) => {
    return (
        <div className="text-secondary flex w-7 items-center gap-1 [&_div]:size-4">
            <Icon>
                <StarIcon />
            </Icon>
            <span className="button-lg text-neutral-gray-500">{rate}</span>
        </div>
    );
};
