

import Dialogs from './Dialogs';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state)=>{
    return {
        newTextMessage: state.dialogPage.newTextMessage,
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        
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


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect )(Dialogs)