
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';
import SendMessageForm from './SendMessageForm';


const Dialogs = (props) => {

    const dialogsData = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    const messagesData = props.messages.map(m => <MessageItem text={m.message} id={m.id} />);

    const sendNewMessage = (values) => {
        debugger
        props.addMessage(values.messageText);
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
                    <SendMessageForm onSubmit ={sendNewMessage}/>
                </div>
            </div>
        </div>
    )
}





export default Dialogs;