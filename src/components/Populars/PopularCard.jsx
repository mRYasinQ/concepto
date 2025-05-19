import { PopularInfo } from './PopularInfo';
import { PopularDetail } from './PopularDetail';

export const PopularCard = ({ companyData }) => {
    return (
        <div className="shadow-no-1 relative flex w-60.5 flex-col gap-y-4 rounded-3xl bg-white pb-4 md:w-auto">
            <PopularInfo company={companyData.company} />
            <PopularDetail companyData={companyData} />
        </div>
    );
};
