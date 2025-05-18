import { OpportunitiesDivider } from './OpportunitiesDivider';
import { OpportunitiesContainer } from './OpportunitiesContainer';

export const Opportunities = () => {
    return (
        <section className="container flex flex-col gap-4 md:gap-10">
            <OpportunitiesDivider />
            <OpportunitiesContainer />
        </section>
    );
};
