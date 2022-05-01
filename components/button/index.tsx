import React, { FC, ForwardedRef, forwardRef } from 'react';


type ButtonProps = {
    children?: any;
    onClick?: () => void;
};

const Button: FC<ButtonProps> = forwardRef(
    ({ children, ...props }: ButtonProps, ref: ForwardedRef<any>) => {
        const { ...remainingProps } = props;

        return (
            <StyledButton ref={ref} {...remainingProps}>
                {children}
            </StyledButton>
        );
    }
);

Button.displayName = 'CustomButton';

export default Button;
