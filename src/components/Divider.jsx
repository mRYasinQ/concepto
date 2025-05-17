export const Divider = ({ title, button, isLine }) => {
    return (
        <div className="flex items-center justify-between">
            {title}
            {isLine && <div className="mx-4 h-0.5 w-full rounded-full bg-gray-200"></div>}
            {button}
        </div>
    );
};
