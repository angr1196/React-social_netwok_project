import * as yup from 'yup'


export const messageFormSchema = yup.object().shape({
    messageText: yup.string().required("Please, enter your message").max(10, 'max length is 300 symbol')
})

export const postFormSchema = yup.object().shape({
    postBody: yup.string().required("Please, enter your post").max(10, 'max length is 300 symbol')
})
