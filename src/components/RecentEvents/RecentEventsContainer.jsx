import { RecentEventCard } from './RecentEventCard';

import RecentEvents from '../../constants/RecentEvents';

export const RecentEventsContainer = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(2,auto)] md:gap-x-6 md:gap-y-8">
            {RecentEvents.map((event, index) => (
                <RecentEventCard key={`${event.name}-${index}`} id={index} eventData={event} />
            ))}
        </div>
    );
};
