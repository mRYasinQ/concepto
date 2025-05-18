import { PopularInfo } from './PopularInfo';
import { PopularDetail } from './PopularDetail';
import { NumberRate } from './NumberRate';
import { Icon } from '../Icon';

import { LocationIcon } from '../../icons/LocationIcon';

export const PopularCard = ({
    companyData: {
        company,
        newContacts,
        newInvesments,
        location: { country, city },
        rate,
    },
}) => {
    return (
        <div className="shadow-no-1 relative flex w-60.5 flex-col gap-y-4 rounded-3xl bg-white pb-4 md:w-auto">
            <PopularInfo companyInfo={company} />
            <div className="flex flex-col gap-4 px-4">
                <div className="flex items-center gap-2">
                    <PopularDetail label="مخاطبین جدید" value={newContacts.toLocaleString()} />
                    <PopularDetail
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
        </div>
    );
};
