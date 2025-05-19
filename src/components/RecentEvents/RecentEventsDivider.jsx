import { Divider } from '../Divider';
import { Title } from '../Title';
import { Button } from '../Button';

import { ChervonLeftIcon } from '../../icons/ChervonLeftIcon';

export const RecentEventsDivider = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Divider
                    title={
                        <Title size="24" style="grey-5">
                            رویداد‌های اخیر
                        </Title>
                    }
                    button={
                        <Button
                            type="text"
                            style="normal"
                            corners="squered"
                            size="48"
                            color="grey"
                            leftIcon={<ChervonLeftIcon />}
                        >
                            مشاهده همه
                        </Button>
                    }
                    isLine={true}
                />
            </div>
            <div className="block lg:hidden">
                <Divider
                    title={
                        <Title size="16" style="grey-7">
                            رویداد‌های اخیر
                        </Title>
                    }
                    button={
                        <Button
                            type="icon"
                            style="normal"
                            corners="squered"
                            size="40"
                            color="grey"
                            leftIcon={<ChervonLeftIcon />}
                        ></Button>
                    }
                    isLine={true}
                />
            </div>
        </>
    );
};
