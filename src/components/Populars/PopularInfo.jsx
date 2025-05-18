export const PopularInfo = ({ companyInfo: { name, category, banner, logo } }) => {
    return (
        <div>
            <img src={`/images/companies/banner/${banner}`} alt={`Banner ${name}`} />
            <div className="-mt-7 flex items-end gap-x-4 p-4 md:-mt-8">
                <img className="size-16 md:size-18" src={`/images/companies/logo/${logo}`} alt={`Logo ${name}`} />
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
