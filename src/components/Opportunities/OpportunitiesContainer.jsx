import { JobCard } from './JobCard';

import CareerOpportunities from '../../constants/CareerOpportunities';

export const OpportunitiesContainer = () => {
    return (
        <div className="flex touch-pan-x items-center justify-between gap-3 overflow-auto">
            {CareerOpportunities.map((job, index) => (
                <JobCard key={`${job.company.name}-${index}`} jobData={job} />
            ))}
        </div>
    );
};
