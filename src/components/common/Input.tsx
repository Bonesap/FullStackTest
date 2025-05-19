import type { LoginFormData } from "../../pages/LoginPage"
import type { InputProps } from "../../types/types"

export const Input = ({ register, errors, placeholder, type }: InputProps) =>{
	const inputType = type === "password" ? "password" : type || "text"
	
	return (
    <div>
        <input
        id={inputType}
        type={inputType}
        className="relative block w-full rounded-md border-0 py-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg leading-6"
        placeholder={placeholder}
        {...register(inputType as keyof LoginFormData)}
        />
        {errors[inputType as keyof LoginFormData] && <p className="mt-1 text-sm text-red-600 px-2 py-1">{errors[inputType as keyof LoginFormData]?.message}</p>}
    </div>
	)
}