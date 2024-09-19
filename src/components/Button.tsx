import {useState} from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode;
    emoji?: string;
    onClick?: () => void;
    disabled?: boolean;
}


const Button = ({ children, emoji = "✅", onClick, ...props }: ButtonProps)  => {
    const [enabled, setEnabled] = useState(false);
    const toggle = () => {
        setEnabled(!enabled)
        onClick && onClick();
    };

    return (
      <>
        <button onClick={toggle} {...props}>{children} {enabled && emoji}</button>
      </>
    )
  }
  
  export default Button