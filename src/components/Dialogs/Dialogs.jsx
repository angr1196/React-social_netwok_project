
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import { Field, reduxForm } from "redux-form"

const Dialogs = (props) => {

    const dialogsData = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    const messagesData = props.messages.map(m => <MessageItem text={m.message} id={m.id} />);

    const sendNewMessage = (values) => {
        props.addMessage(values.message);
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesData}
                </div>
                <div >
                    <SendMessageReduxForm onSubmit ={sendNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const SendMessageForm = (props) => {

    return (
    <form onSubmit={props.handleSubmit}>
        <div className={s.sendBlock}>
            <Field placeholder = "Enter your message" name ={"message"} component ={"textarea"}/>
        </div>
        <div>
            <button >Send</button>
        </div>
    </form>
)}

const SendMessageReduxForm = reduxForm({
    form: "sendMessageForm"
})(SendMessageForm)



export default Dialogs;