

import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return {
        newTextMessage: state.dialogPage.newTextMessage,
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            let action = onMessageChangeActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;