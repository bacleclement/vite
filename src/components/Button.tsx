import {useState} from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode;
    emoji?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({ children, emoji = "✅", onClick, className, ...props }: ButtonProps) => {
    const [enabled, setEnabled] = useState(false);
    const toggle = () => {
        setEnabled(!enabled);
        onClick && onClick();
    };

    return (
        <button 
            onClick={toggle} 
            className={classNames(
                'px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300 ease-in-out',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;