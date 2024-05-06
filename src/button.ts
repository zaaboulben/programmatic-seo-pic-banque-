import React from 'react';

export type ButtonType ='submit'|'reset'|'button';

export interface MainButtonProps{
    children: React.ReactNode
    className?: string; 
    type?: ButtonType;
    onClick?: () => void;
    disabled?: boolean;
    asChild?: boolean;



}