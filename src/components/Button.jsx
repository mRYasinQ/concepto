import { Icon } from './Icon';

import StyleVariant from '../constants/variants/button/StyleVariant';
import CornerVariant from '../constants/variants/button/CornerVariant';
import SizeVariant from '../constants/variants/button/SizeVariant';

export const Button = ({ type, style, color, size, corners, rightIcon, leftIcon, btnRef, onClick, children }) => {
    return (
        <button
            ref={btnRef}
            onClick={onClick}
            className={`flex cursor-pointer items-center justify-center gap-2 ${StyleVariant[color][style]} ${SizeVariant[size][type]} ${CornerVariant[corners]}`}
        >
            {rightIcon && <Icon>{rightIcon}</Icon>}
            <span className={type === 'icon' ? 'hidden' : ''}>{children}</span>
            {leftIcon && <Icon>{leftIcon}</Icon>}
        </button>
    );
};
