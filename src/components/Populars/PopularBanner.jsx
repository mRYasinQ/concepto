export const PopularBanner = ({ company: { name, banner } }) => {
    return (
        <div className="h-33.5 overflow-hidden rounded-t-3xl mask-[image:url('/images/masks/popular.svg')] mask-no-repeat">
            <img className="h-full w-full" src={`images/companies/banner/${banner}`} alt={name} />
        </div>
    );
};
