import { PopularData } from './PopularData';
import { NumberRate } from './NumberRate';
import { Icon } from '../Icon';

import { LocationIcon } from '../../icons/LocationIcon';

export const PopularDetail = ({
    companyData: {
        newContacts,
        newInvesments,
        location: { country, city },
        rate,
    },
}) => {
    return (
        <div className="flex flex-col gap-4 px-4">
            <div className="flex items-center gap-2">
                <PopularData label="مخاطبین جدید" value={newContacts.toLocaleString()} />
                <PopularData
                    label={
                        <span>
                            سرمایه گذاران <span className="hidden lg:inline-block">جدید</span>
                        </span>
                    }
                    value={newInvesments.toLocaleString()}
                />
            </div>
            <div className="flex items-center justify-between">
                <span className="text-neutral-gray-400 body-xxs flex items-center gap-2 [&_div]:size-5">
                    <Icon>
                        <LocationIcon />
                    </Icon>
                    {`${country}، ${city}`}
                </span>
                <NumberRate rate={rate} />
            </div>
        </div>
    );
};
