export const HeroImage = ({ src, alt = 'تصیر سکشن هیرو', className = '' }) => {
    return (
        <div className={`relative lg:absolute ${className}`}>
            <img className="h-[38rem] w-full lg:h-full" src={src} alt={alt} />
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-[#ffffff]/0 from-53% to-[#ffffff]/100 to-98% lg:hidden"></div>
        </div>
    );
};
