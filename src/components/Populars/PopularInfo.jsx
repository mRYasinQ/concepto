import { PopularBanner } from './PopularBanner';

export const PopularInfo = ({ company }) => {
    const { name, logo, category } = company;

    return (
        <div>
            <PopularBanner company={company} />
            <div className="relative -mt-3 flex items-end gap-x-4 px-4">
                <div className="border-neutral-white size-16 overflow-hidden rounded-xl border-[3px] md:size-18">
                    <img
                        className="h-full w-full object-cover object-center"
                        src={`/images/companies/logo/${logo}`}
                        alt={name}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="caption-lg text-neutral-gray-700">
                        <a href="#">{name}</a>
                    </h4>
                    <a className="button-s md:caption-lg text-neutral-gray-500" href="#">
                        {category}
                    </a>
                </div>
            </div>
        </div>
    );
};
