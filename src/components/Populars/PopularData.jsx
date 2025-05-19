export const PopularData = ({ label, value }) => {
    return (
        <div className="border-neutral-gray-100 flex w-full flex-col gap-1 rounded-lg border p-2">
            <h6 className="caption-lg text-neutral-gray-700 whitespace-nowrap">{label}</h6>
            <span className="caption-lg text-primary">{value}</span>
        </div>
    );
};
