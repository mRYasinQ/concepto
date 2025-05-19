import { RecentEventsDivider } from './RecentEventsDivider';
import { RecentEventsContainer } from './RecentEventsContainer';

export const RecentEvents = () => {
    return (
        <section className="container flex flex-col gap-4 md:gap-10">
            <RecentEventsDivider />
            <RecentEventsContainer />
        </section>
    );
};
