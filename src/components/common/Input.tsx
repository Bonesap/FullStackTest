import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { LoginFormData } from "../../pages/LoginPage"

export const Input = ({label, register, errors, placeholder, type}: {label: string, register: UseFormRegister<LoginFormData>, errors: FieldErrors<LoginFormData>, placeholder: string, type: string}) =>{
	const allowType = type === "password" ? "password" : "text"
	const fieldName = label === "Email address" ? "email" : "password"
	
	return (
<div>
              <label htmlFor={fieldName} className="sr-only">
                {label}
              </label>
              <input
                id={fieldName}
                type={allowType}
                className="relative block w-full rounded-md border-0 py-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg leading-6"
                placeholder={placeholder}
                {...register(fieldName as keyof LoginFormData)}
              />
              {errors[fieldName as keyof LoginFormData] && <p className="mt-1 text-sm text-red-600 px-2 py-1">{errors[fieldName as keyof LoginFormData]?.message}</p>}
            </div>
	)
}