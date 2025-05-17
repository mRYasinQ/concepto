import { Icon } from './Icon';

import StyleButton from '../constants/variants/button/StyleButton';
import SizeButton from '../constants/variants/button/SizeButton';
import CornerButton from '../constants/variants/button/CornerButton';

export const Button = ({ type, style, color, size, corners, rightIcon, leftIcon, btnRef, onClick, children }) => {
    return (
        <button
            ref={btnRef}
            onClick={onClick}
            className={`flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap ${StyleButton[color][style]} ${SizeButton[size][type]} ${CornerButton[corners]}`}
        >
            {rightIcon && <Icon>{rightIcon}</Icon>}
            <span className={type === 'icon' ? 'hidden' : ''}>{children}</span>
            {leftIcon && <Icon>{leftIcon}</Icon>}
        </button>
    );
};
