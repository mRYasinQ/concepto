export const InvesmentItem = ({ value, label }) => {
    return (
        <div className="h-[51.2px] w-full md:h-[85px] md:w-auto lg:w-full">
            <div className="= flex items-center md:justify-center">
                <div className="bg-secondary-tint-300 size-[51.2px] rounded-full md:size-[85px]"></div>
                <div className="text-neutral-black -mr-6 flex h-8 items-center gap-2 md:-mr-10 md:h-[62px] md:gap-4">
                    <span className="body-s md:body-3xlg">{value.toLocaleString()}+</span>
                    <h5 className="caption-lg md:heading-5 whitespace-nowrap">{label}</h5>
                </div>
            </div>
        </div>
    );
};
