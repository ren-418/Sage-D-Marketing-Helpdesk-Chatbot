import { useState, useEffect } from "react";

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    validationRegex: RegExp;
    errorMessage: string;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    type,
    label,
    value,
    onChange,
    validationRegex,
    errorMessage,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        if (value === "") {
            setIsValid(true);
        } else {
            validate(value);
        }
    }, [value]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        validate(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        if (!isValid) {
            validate(e.target.value);
        }
    };

    const validate = (val: string) => {
        setIsValid(validationRegex.test(val));
    };

    return (
        <div className="flex flex-col gap-1 w-full">
            <div
                className={`flex justify-end w-full rounded-lg border h-[54px] bg-white relative transition-colors ${
                    isValid
                        ? isFocused
                            ? "border-black"
                            : "border-[#dbdfe6]"
                        : "border-red-500"
                }`}
            >
                <div className="relative w-full px-[14px] py-2">
                    <input
                        id={id}
                        name={name}
                        type={type}
                        value={value}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className={`mt-[17px] peer bg-inherit w-full text-black text-md outline-none transition-all ${
                            isValid ? "" : "border-red-500"
                        }`}
                        placeholder=" "
                    />

                    <label
                        htmlFor={id}
                        className={`absolute left-[14px] top-[15px] pointer-events-none transition-all ${
                            isFocused || value
                                ? `text-xs top-[5px] left-[10px] ${!isValid ? 'text-red-500' : 'text-gray-400'} bg-white`
                                : `text-base top-2.5 ${!isValid ? 'text-red-500' : 'text-gray-600'}`
                        }`}
                    >
                        {label}
                    </label>
                </div>
            </div>
            {!isValid && (
                <span className="text-red-500 text-xs px-3 text-poppins">
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default InputField;
