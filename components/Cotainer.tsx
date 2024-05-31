import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    
    const containerClass = `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`;

    return (
        <div className={containerClass}>
            {children}
        </div>
    );
}

export default Container;
