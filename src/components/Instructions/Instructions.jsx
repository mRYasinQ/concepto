import { InstructionCard } from './InstructionCard';

import InstructionItems from '../../constants/InstructionItems';

export const Instructions = () => {
    return (
        <section className="container">
            <div className="flex flex-col items-center gap-6 md:justify-center lg:flex-row lg:justify-normal">
                {InstructionItems.map((InstructionItem) => (
                    <InstructionCard key={window.crypto.randomUUID()} cardData={InstructionItem} />
                ))}
            </div>
        </section>
    );
};
