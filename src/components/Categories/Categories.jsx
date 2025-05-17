import { CategoriesDivider } from './CategoriesDivider';
import { CategoriesContainer } from './CategoriesContainer';

export const Categories = () => {
    return (
        <section className="container flex flex-col gap-6">
            <CategoriesDivider />
            <CategoriesContainer />
        </section>
    );
};
