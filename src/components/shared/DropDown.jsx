import { FaCaretDown } from "react-icons/fa";

const DropDown = ({
    label,
    value,
    onChange,
    error,
    errorMessage,
    options,
    includeDefault,
}) => {
    return (
        <div className="flex flex-col gap-2 items-start">
            {label && (
                <label className={`text-sm font-semibold ${error ? 'text-red-600' : 'text-gray-600'}`}>
                    {label}
                </label>
            )}

            <div className="w-full h-max relative">
                <select
                    id="dropdown"
                    value={value}
                    onChange={onChange}
                    className={error ? 'border-red-600' : 'border-slate-400 w-full px-6 py-2 border bg-[#D9D9D9AB] text-gray-600 text-sm font-semibold focus:outline-none appearance-none italic'}
                >
                    {includeDefault && <option value="" className="text-sm font-semibold text-gray-500 appearance-none italic">-Select-</option>}

                    {options &&
                        options.map((option, index) => (
                            <option
                                key={index}
                                value={option.value}
                                className="text-sm font-semibold text-gray-500 appearance-none"
                            >
                                {option.label}
                            </option>
                        ))}


                </select>

                <FaCaretDown
                    className="text-gray-600 text-lg absolute right-4 top-0 bottom-0 my-auto cursor-pointer pointer-events-none"
                />
            </div>

            {error && <small className="text-xs text-red-600">{errorMessage}</small>}
        </div>
    );
}

export default DropDown;
