import { PopularsDivider } from './PopularsDivider';
import { PopularsContainer } from './PopularsContainer';

export const Populars = () => {
    return (
        <section className="relative">
            <div className="absolute z-[-1] h-[205px] w-full lg:h-fit">
                <img className="h-full w-full" src="/images/banner.png" alt="Banner" />
            </div>
            <div className="container mt-8 flex flex-col gap-14 md:mt-13 lg:mt-32">
                <PopularsDivider />
                <PopularsContainer />
            </div>
        </section>
    );
};
