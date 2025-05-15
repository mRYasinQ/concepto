export const HeroImage = ({ src, alt = 'تصیر سکشن هیرو', className = '' }) => {
    return (
        <div className={`relative lg:absolute ${className}`}>
            <img src={src} alt={alt} />
            <div className="absolute top-0 bottom-0 size-full bg-gradient-to-b from-[#ffffff]/0 from-53% to-[#ffffff]/100 to-72% lg:hidden"></div>
        </div>
    );
};
