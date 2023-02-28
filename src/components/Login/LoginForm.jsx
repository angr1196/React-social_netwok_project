import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormSchema } from "../../utils/FormValidators/FormSchemas"

const LoginForm = (props) => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(loginFormSchema),
        mode: 'onChange',
    })

    return <form onSubmit={handleSubmit(props.onSubmit)}>
        <div>
            <input {...register("login")} placeholder="Login" />
        </div>
        {errors.login ? <div style={{ color: "red" }}>{errors.login.message}</div> : ""}
        <div>
            <input type='password' {...register("password")} placeholder="Password" />
        </div>
        {errors.password ? <div style={{ color: "red" }}>{errors.password.message}</div> : ""}
        <div>
            <input type="checkbox" {...register("rememberMe")}   /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>

}

export default LoginForm;