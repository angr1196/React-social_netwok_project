import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const messageFormSchema = yup.object().shape({
    messageText: yup.string().required("Please, enter your message").max(10, 'max length is 300 symbol')
})

export const postFormSchema = yup.object().shape({
    postBody: yup.string().required("Please, enter your post").max(10, 'max length is 300 symbol')
})

export const loginFormSchema = yup.object().shape({
    login: yup.string().required("Please, enter your login").email("Please, enter your email"),
    password: yup.string().required("Please, enter your password")
})