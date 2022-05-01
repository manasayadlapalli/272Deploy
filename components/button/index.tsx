import React, { FC, ForwardedRef, forwardRef } from 'react';


type ButtonProps = {
    children?: any;
    onClick?: () => void;
};

const Button: FC<ButtonProps> = forwardRef(
    ({ children, ...props }: ButtonProps, ref: ForwardedRef<any>) => {
        const { ...remainingProps } = props;

        return (
            <button ref={ref} {...remainingProps}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'CustomButton';

export default Button;
