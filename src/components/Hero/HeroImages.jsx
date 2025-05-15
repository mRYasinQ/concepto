import { HeroImage } from './HeroImage';

export const HeroImages = () => {
    return (
        <div className="relative flex h-full w-full max-w-4xl items-center justify-center lg:h-[40rem] lg:justify-normal">
            <HeroImage
                src="/images/hero/01.png"
                className="h-[26rem] w-auto overflow-hidden lg:top-[-15%] lg:right-[-20%] lg:z-[1] lg:h-fit lg:w-80 lg:overflow-visible"
            />
            <HeroImage src="/images/hero/02.png" className="top-0 z-0 hidden lg:block" />
            <HeroImage src="/images/hero/03.png" className="bottom-[-5%] left-[-20%] z-[1] hidden w-[30rem] lg:block" />
        </div>
    );
};
