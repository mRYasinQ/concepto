import { Icon } from './Icon';

import StyleTitle from '../constants/variants/title/StyleTitle';
import SizeTitle from '../constants/variants/title/SizeTitle';

export const Title = ({ style, size, icon, children }) => {
    return (
        <h4 className={`flex items-center whitespace-nowrap ${StyleTitle[style]} ${SizeTitle[size]}`}>
            {icon && <Icon>{icon}</Icon>}
            <span>{children}</span>
        </h4>
    );
};
