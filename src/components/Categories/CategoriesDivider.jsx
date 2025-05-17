import { Divider } from '../Divider';
import { Button } from '../Button';
import { Title } from '../Title';

import { ChervonLeftIcon } from '../../icons/ChervonLeftIcon';

export const CategoriesDivider = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Divider
                    title={
                        <Title size="24" style="grey-5">
                            دسته بندی ها
                        </Title>
                    }
                    isLine={true}
                />
            </div>
            <div className="block lg:hidden">
                <Divider
                    title={
                        <Title size="16" style="grey-7">
                            دسته بندی ها
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
