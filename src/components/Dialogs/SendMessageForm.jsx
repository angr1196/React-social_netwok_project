import { useForm } from "react-hook-form"
import s from './Dialogs.module.css';
import { yupResolver } from '@hookform/resolvers/yup'
import { messageFormSchema } from "../../utils/FormValidators/FormSchemas";


const SendMessageForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(messageFormSchema),
        mode: 'onChange',
    });


    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.sendBlock}>
                <textarea placeholder="Enter your message" {...register("messageText")} />
            </div>
            {errors.messageText ? <div style={{ color: "red" }}>{errors.messageText.message}</div> : ""}
            <div>
                <button >Send</button>
            </div>
        </form>
    )
}

export default SendMessageForm;