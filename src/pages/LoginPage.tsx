import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../validation/login.ts'
import { Input } from '../components/common/Input.tsx'
import { useNavigate } from 'react-router-dom'

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="-space-y-px rounded-md shadow-sm space-y-2"  >
            <Input label="Email address" register={register} errors={errors} placeholder="Email address" type="email" />
            <Input label="Password" register={register} errors={errors} placeholder="Password" type="password" />
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage 