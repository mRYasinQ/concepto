import { RecentEventImage } from './RecentEventImage';
import { RecentEventDetail } from './RecentEventDetail';

export const RecentEventCard = ({ id, eventData }) => {
    return (
        <div className="border-neutral-gray-200 col-span-1 flex h-35 gap-2 overflow-hidden rounded-3xl border bg-white md:h-52 md:gap-0">
            <RecentEventImage id={id} name={eventData.name} banner={eventData.banner} />
            <RecentEventDetail eventData={eventData} />
        </div>
    );
};
