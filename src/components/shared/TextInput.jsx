const TextInput = ({
    label, 
    error, 
    errorMessage, 
    type, 
    name,
    value, 
    Styles, 
    border, 
    borderColor, 
    placeholder, 
    onChange,
    max,
    min,
    required,
    readOnly
    
}) => {
return (
<div className='flex flex-col gap-2 items-start'>

    {label && 
        <label className={`text-[18px] ml-4 font-bold font-montserrat ${error ? 'text-red-600' : 'text-white'}`}>
            {label}
        </label>
    }

    <input
        type={type ? type : 'text'}
        value={value ?? undefined}
        name={name}
        className={`${Styles ? Styles : 'text-sm font-medium bg-white bg-opacity-40'} w-full h-[60px] bg-gray-300  placeholder:text-white placeholder:text-[15px] placeholder:italic rounded-full px-10 focus:outline-none shadow-xs ${border && 'border border-gray-300'} ${border && error ? 'border-red-600': borderColor} `}
        placeholder={placeholder}
        onChange={onChange}
        required = {required}
        max={max}
        min={min}
        readOnly={readOnly}
    />

    {error && 
        <h1 className="text-[#EF6B48] text-[12px] italic font-bold font-montserrat ml-4">
            { errorMessage }
        </h1>
    }
    
</div>
)
}


export default TextInput