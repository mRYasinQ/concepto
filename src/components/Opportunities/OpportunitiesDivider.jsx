import { Divider } from '../Divider';
import { Button } from '../Button';
import { Title } from '../Title';

import { ChervonLeftIcon } from '../../icons/ChervonLeftIcon';

export const OpportunitiesDivider = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Divider
                    title={
                        <Title size="24" style="grey-5">
                            فرصت‌های شغلی
                        </Title>
                    }
                    isLine={true}
                />
            </div>
            <div className="block lg:hidden">
                <Divider
                    title={
                        <Title size="16" style="grey-7">
                            فرصت‌های شغلی
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
                />
            </div>
        </>
    );
};
