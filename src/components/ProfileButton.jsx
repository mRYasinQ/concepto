export const ProfileButton = ({ profile: { imgSrc, notification }, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="lg:border-neutral-gray-400 lg:bg-neutral-white text-neutral-gray-800 flex cursor-pointer items-center gap-3 bg-transparent lg:h-12 lg:w-fit lg:rounded-xl lg:border lg:px-3"
        >
            <div className="relative">
                <img className="size-10 rounded-full lg:size-8" src={imgSrc} alt="تصویر پروفایل کاربر" />
                {notification.length >= 1 && (
                    <div className="bg-primary border-neutral-white absolute right-[10%] bottom-[5%] size-2 rounded-full border-2"></div>
                )}
            </div>
            <span className="button-lg hidden lg:block">{children}</span>
        </button>
    );
};
