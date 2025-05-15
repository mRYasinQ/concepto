import { InvesmentItem } from './InvesmentItem';

import InvesmentItems from '../../constants/InvesmentItems';

export const Invesments = () => {
    return (
        <section className="container">
            <div className="flex flex-col-reverse gap-y-3 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-6 lg:flex-nowrap lg:gap-y-0">
                {InvesmentItems.map(({ value, label }) => (
                    <InvesmentItem key={window.crypto.randomUUID()} value={value} label={label} />
                ))}
            </div>
        </section>
    );
};
