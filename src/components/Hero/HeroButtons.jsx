import { Button } from '../Button';

import { ZapIcon } from '../../icons/ZapIcon';
import { ChervonLeftIcon } from '../../icons/ChervonLeftIcon';

export const HeroButtons = () => {
    return (
        <>
            <div className="hidden items-center gap-4 lg:flex">
                <Button type="text" style="fill" color="blue" size="48" corners="squered" rightIcon={<ZapIcon />}>
                    رایگان شروع کن!
                </Button>
                <Button
                    type="text"
                    style="outline"
                    color="black"
                    size="48"
                    corners="squered"
                    leftIcon={<ChervonLeftIcon />}
                >
                    درباره کانسپتو
                </Button>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
                <Button type="text" style="fill" color="blue" size="40" corners="squered" rightIcon={<ZapIcon />}>
                    رایگان شروع کن!
                </Button>
                <Button
                    type="text"
                    style="outline"
                    color="black"
                    size="40"
                    corners="squered"
                    leftIcon={<ChervonLeftIcon />}
                >
                    درباره کانسپتو
                </Button>
            </div>
        </>
    );
};
