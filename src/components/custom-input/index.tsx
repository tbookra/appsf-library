import {  FC,Children, ReactElement } from 'react';


type CustomInputWrapperProps = {
    errorMessage: string | undefined;
    errors:string | undefined | {};
    label:string;
    children : ReactElement 
}

export const CustomInput:FC<CustomInputWrapperProps> = ({ errorMessage, errors, label, children  }) => {
return (
    <div >
        {children}
        <label htmlFor={children?.props.id }>{label}</label>
        {errors && <p id={`${children?.props.id}_described`} >{errorMessage} </p>}
      </div>
)
}