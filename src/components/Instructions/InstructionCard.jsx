export const InstructionCard = ({ cardData: { image, title, color } }) => {
    const instructionCardStyle = {
        '--bg-card': color,
    };

    return (
        <div className="flex h-[170px] w-full flex-col justify-end gap-4 md:h-[272px] lg:w-[392px]">
            <div
                className="relative flex h-21 w-full justify-center rounded-4xl bg-[var(--bg-card)] md:h-[138px]"
                style={instructionCardStyle}
            >
                <img
                    className="absolute bottom-0 h-[128.8px] px-8 md:h-[228px]"
                    src={`/images/instruction/${image}`}
                    alt={title}
                />
            </div>
            <h5 className="caption-lg md:heading-5 text-center text-black">{title}</h5>
        </div>
    );
};
