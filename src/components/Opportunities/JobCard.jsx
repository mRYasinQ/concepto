export const JobCard = ({
    jobData: {
        company: { logo, name },
        opportunity,
    },
}) => {
    return (
        <div className="flex min-h-fit min-w-fit flex-col items-center">
            <div className="relative -mb-[20%] size-14 overflow-hidden rounded-lg bg-white shadow-[0px_10px_50px_rgba(0,0,0,0.08)] md:size-18">
                <img
                    className="h-full w-full object-cover object-center"
                    src={`/images/opportunities/${logo}`}
                    alt={name}
                />
            </div>
            <a
                className="flex flex-col items-center gap-1.5 rounded-3xl bg-[#f6f6f6] px-6 pt-12 pb-10 md:gap-3 md:px-10 md:pt-18 md:pb-12"
                href="#"
            >
                <span className="body-xs md:body-s text-neutral-gray-700">{opportunity} فرصت شغلی</span>
                <h4 className="caption-lg text-primary">{name}</h4>
            </a>
        </div>
    );
};
