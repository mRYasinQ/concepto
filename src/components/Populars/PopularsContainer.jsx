import { PopularCard } from './PopularCard';

import PopularCompanies from '../../constants/PopularCompanies';

export const PopularsContainer = () => {
    return (
        <div className="flex touch-pan-x items-center gap-4 overflow-auto md:gap-6 xl:touch-none xl:overflow-hidden">
            {PopularCompanies.map((popularCompany, index) => (
                <PopularCard key={`${popularCompany?.company?.name}-${index}`} companyData={popularCompany} />
            ))}
        </div>
    );
};
