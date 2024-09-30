import { API_ENDPOINT } from "@/utils/constants/query";
import http from "@/utils/https/http";
import axios from "axios";

const API = () => { }

API.AuthLogin = async (payload) => {
    const { data } = await http.post(API_ENDPOINT.AUTH.LOGIN.PATH, {
        ...payload
    })
    return data
}

API.GET_QUOTES = async ({ pageParam = 0 }) => {
    const limit = 20;
    const offset = pageParam * limit
    const { data } = await http.get(`${API_ENDPOINT.QUOTE.GET_ALL.PATH}?limit=${limit}&offset=${offset}`)
    return data
}

API.UPLOAD_IMAGE = async (formdata) => {
    const { data } = await axios.post(API_ENDPOINT.QUOTE.UPLOAD_IMAGE.PATH, formdata, {
        headers: {
            "Accept": "*/*",
            'Content-Type': "multipart/form-data"
        }
    })
    return data
}

API.UPLOAD_QUOTE = async (payload) => {
    const { data } = await http.post(API_ENDPOINT.QUOTE.POST_QUOTE.PATH, payload)
    return data
}

export default API;