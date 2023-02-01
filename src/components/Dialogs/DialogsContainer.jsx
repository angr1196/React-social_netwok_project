

import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/reducer-dialogs';

const DialogsContainer = (props) => {

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const updateNewMessageText = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <Dialogs addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
            newTextMessage={props.store.getState().dialogPage.newTextMessage}
            dialogs={props.store.getState().dialogPage.dialogs}
            messages={props.store.getState().dialogPage.messages} />
    )
}

export default DialogsContainer;