import { Category } from './Category';

import CategoryItems from '../../constants/CategoryItems';

export const CategoriesContainer = ({}) => {
    return (
        <div className="grid grid-cols-4 gap-y-6 md:grid-cols-5 lg:grid-cols-7">
            {CategoryItems.map((category, index) => (
                <Category key={`${category.name}-${index}`} categoryData={category} />
            ))}
        </div>
    );
};
