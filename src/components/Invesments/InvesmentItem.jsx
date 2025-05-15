export const InvesmentItem = ({ value, label }) => {
    return (
        <div className="h-[51.2px] w-full md:h-[65px] lg:h-[85px]">
            <div className="= flex items-center lg:justify-center">
                <div className="bg-secondary-tint-300 size-[51.2px] rounded-full md:size-[65px] lg:size-[85px]"></div>
                <div className="text-neutral-black -mr-6 flex h-8 items-center gap-2 md:-mr-8 md:h-11 lg:-mr-10 lg:h-[62px] lg:gap-4">
                    <span className="body-s md:body-lg lg:body-3xlg">{value.toLocaleString()}+</span>
                    <h5 className="caption-lg md:heading-6 lg:heading-5 whitespace-nowrap">{label}</h5>
                </div>
            </div>
        </div>
    );
};
