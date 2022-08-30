import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent
} from 'react'
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string

}

export const Input: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, name, title,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value)
    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    };


    const finalInputClassName = error ? "is-danger" : '';

    return (
        <input className={`input is-small ${finalInputClassName}`}
               type={type}
               name={name}
               onChange={onChangeCallback}
               onKeyDown={onKeyPressCallback}
               {...restProps}/>
    )
};
