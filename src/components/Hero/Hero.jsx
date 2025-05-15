import { TypeAnimation } from 'react-type-animation';

import { HeroButtons } from './HeroButtons';
import { HeroImages } from './HeroImages';

export const Hero = () => {
    return (
        <section className="before:bg-primary after:bg-primary relative container flex flex-col items-center justify-center gap-8 py-10 before:absolute before:top-0 before:left-[98%] before:z-[-1] before:hidden before:size-40 before:blur-[450px] before:content-[''] after:absolute after:right-[98%] after:bottom-[10%] after:z-[-1] after:hidden after:size-40 after:blur-[450px] after:content-[''] lg:py-24 lg:before:block lg:after:block">
            <div className="flex flex-col gap-4 text-center lg:gap-6">
                <TypeAnimation
                    className="text-primary-shade-700 lg:display-2 heading-5"
                    sequence={['با سرچ کمتر نتیجه بهتر بگیر', 1000]}
                    speed={10}
                    wrapper="h1"
                />
                <p className="text-primary-shade-500 caption-lg lg:body-regular w-2xs text-center lg:w-auto">
                    کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی
                </p>
            </div>
            <HeroButtons />
            <HeroImages />
        </section>
    );
};
