export const Category = ({ categoryData: { name, link, image } }) => {
    return (
        <a href={link} className="m-auto flex h-21.5 w-14 flex-col items-center gap-2 md:h-[141px] md:w-24 md:gap-4">
            <div className="border-primary rounded-full md:border-2 md:p-1.5">
                <img src={`/images/categories/${image}`} alt={name} />
            </div>
            <h6 className="body-xxs md:body-xs text-center whitespace-nowrap text-[#2A2A2A]">{name}</h6>
        </a>
    );
};
