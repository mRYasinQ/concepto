import { Button } from '../Button';

import { LogInIcon } from '../../icons/LogInIcon';
import { ZapIcon } from '../../icons/ZapIcon';

export const HeaderButtons = ({ isLogged, setIsLogged }) => {
    function clickHandler(e) {
        e.preventDefault();

        setIsLogged((isLogged) => !isLogged);
    }

    return (
        <>
            <div className="flex w-full items-center justify-end gap-4 lg:hidden">
                <Button type="icon" style="fill" color="blue" size="40" corners="squered" rightIcon={<ZapIcon />}>
                    رایگان شروع کن!
                </Button>
                {isLogged ? (
                    <Button
                        type="icon"
                        style="outline"
                        color="grey"
                        size="40"
                        corners="squered"
                        rightIcon={<LogInIcon />}
                        onClick={clickHandler}
                    >
                        خروج
                    </Button>
                ) : (
                    <Button
                        type="icon"
                        style="outline"
                        color="black"
                        size="40"
                        corners="squered"
                        rightIcon={<LogInIcon />}
                        onClick={clickHandler}
                    >
                        ورود / ثبت‌نام
                    </Button>
                )}
            </div>
            <div className="hidden w-full items-center justify-end gap-4 lg:flex">
                <Button type="text" style="fill" color="blue" size="48" corners="squered" rightIcon={<ZapIcon />}>
                    رایگان شروع کن!
                </Button>
                {isLogged ? (
                    <Button
                        type="text"
                        style="outline"
                        color="grey"
                        size="48"
                        corners="squered"
                        rightIcon={<LogInIcon />}
                        onClick={clickHandler}
                    >
                        خروج
                    </Button>
                ) : (
                    <Button
                        type="text"
                        style="outline"
                        color="black"
                        size="48"
                        corners="squered"
                        rightIcon={<LogInIcon />}
                        onClick={clickHandler}
                    >
                        ورود / ثبت‌نام
                    </Button>
                )}
            </div>
        </>
    );
};
