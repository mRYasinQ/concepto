import { Button } from '../Button';
import { Divider } from '../Divider';
import { Title } from '../Title';

import { ChervonLeftIcon } from '../../icons/ChervonLeftIcon';

export const PopularsDivider = () => {
    return (
        <>
            <div className="hidden md:block">
                <Divider
                    title={
                        <Title size="24" style="light">
                            شرکت‌های محبوب
                        </Title>
                    }
                    button={
                        <Button
                            type="text"
                            style="normal"
                            corners="squered"
                            size="56"
                            color="white"
                            leftIcon={<ChervonLeftIcon />}
                        >
                            مشاهده همه
                        </Button>
                    }
                    isLine={true}
                />
            </div>
            <div className="block md:hidden">
                <Divider
                    title={
                        <Title size="14" style="light">
                            شرکت‌های محبوب
                        </Title>
                    }
                    button={
                        <Button
                            type="icon"
                            style="normal"
                            corners="squered"
                            size="40"
                            color="white"
                            leftIcon={<ChervonLeftIcon />}
                        ></Button>
                    }
                />
            </div>
        </>
    );
};
