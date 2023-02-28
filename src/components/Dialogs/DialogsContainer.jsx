
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state)=>{
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage))
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect )(Dialogs)