import * as React from 'react';

export interface HelloWorldProps {
    className?: string;
    verbose?: boolean;
}

export function HelloWorld({ className, verbose }: HelloWorldProps) {
    return (
        <div className={className} style={{ padding: '20px' }}>
            <p>Hello there! {verbose && 'Really nice to meet you!'}</p>
        </div>
    );
}