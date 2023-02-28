import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { postFormSchema } from "../../../utils/FormValidators/FormSchemas"

const SendPostForm = (props) => {

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(postFormSchema),
        mode: 'onChange',
    })

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                <textarea placeholder="Enter your post" {...register("postBody")} />
            </div>
            {errors.postBody ? <div style={{ color: "red" }}>{errors.postBody.message}</div> : ""}
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default SendPostForm;