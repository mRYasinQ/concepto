import { Icon } from '../Icon';

import { LocationIcon } from '../../icons/LocationIcon';
import { DateIcon } from '../../icons/DateIcon';

export const RecentEventDetail = ({
    eventData: {
        name,
        description,
        location: { country, city },
        createdAt,
    },
}) => {
    return (
        <div className="flex w-[60%] flex-col justify-between p-2 sm:w-[75%] md:w-[60%] md:pt-8 md:pr-6 md:pb-6 md:pl-8">
            <div className="flex flex-col gap-4">
                <h3 className="caption-lg md:heading-5 text-neutral-gray-700">
                    <a href="#">{name}</a>
                </h3>
                <p className="button-s md:body-xs text-neutral-gray-500 line-clamp-2">{description}</p>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-neutral-gray-400 body-xxs flex items-center gap-2 [&_div]:size-5">
                    <Icon>
                        <LocationIcon />
                    </Icon>
                    {`${country}، ${city}`}
                </span>
                <span className="text-neutral-gray-400 body-xxs flex items-center gap-2 [&_div]:size-5">
                    <Icon>
                        <DateIcon />
                    </Icon>
                    {createdAt}
                </span>
            </div>
        </div>
    );
};
