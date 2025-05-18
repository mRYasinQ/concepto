import { Category } from './Category';

import CategoryItems from '../../constants/CategoryItems';

export const CategoriesContainer = ({}) => {
    return (
        <div className="grid grid-cols-[repeat(4,auto)] justify-between gap-y-6 md:grid-cols-[repeat(5,auto)] lg:grid-cols-[repeat(7,auto)]">
            {CategoryItems.map((category, index) => (
                <Category key={`${category.name}-${index}`} categoryData={category} />
            ))}
        </div>
    );
};
