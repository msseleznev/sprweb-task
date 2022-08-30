import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Radio: React.FC<SuperRadioPropsType> = (
    {
        name,
        options, value,
        onChange, onChangeOption,
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((option, i) => (
        <div key={name + '-' + i}>
            <label className="radio">
                <input type="radio"
                       name={name}
                       checked={option === value}
                       value={option}
                       onChange={onChangeCallback}/>
                <strong className="ml-1">{option}</strong>
            </label>
        </div>

    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
};
