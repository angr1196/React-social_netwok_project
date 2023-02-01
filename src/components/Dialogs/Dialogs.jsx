
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import React from 'react';

const Dialogs = (props) => {

    const dialogsData = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    const messagesData = props.messages.map(m => <MessageItem text={m.message} id={m.id} />);

    const onAddMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                    <div className={s.sendBlock}>
                        <textarea onChange={onMessageChange} value={props.newTextMessage} />
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;