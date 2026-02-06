import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded font-medium transition-all duration-300 font-display text-sm md:text-base cursor-pointer";

    const variants = {
        primary: "bg-primary-gold text-white hover:bg-yellow-600 shadow-md",
        outline: "border-2 border-primary-darkblue text-primary-darkblue hover:bg-primary-darkblue hover:text-white",
        dark: "bg-primary-darkblue text-white hover:bg-opacity-90",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
