export const RecentEventImage = ({ id, name, banner }) => {
    return (
        <div className="relative h-35 w-[40%] sm:w-[25%] md:h-52 md:w-[40%]">
            <img className="absolute h-full w-full" src={`/images/layouts/recentEvent.png`} alt="Layout" />
            <div className="h-full w-[calc(100%-20px)] mask-[image:url('/images/layouts/recentEvent.png')] mask-cover mask-no-repeat">
                <img className="h-full w-full" src={`/images/events/${banner}`} alt={name} />
            </div>
        </div>
    );
};
