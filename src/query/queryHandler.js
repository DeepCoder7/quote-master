
const { useMutation, useInfiniteQuery } = require("react-query")
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'
import { API_ENDPOINT } from "@/utils/constants/query";
const { default: API } = require("./api")

export const useLoginMuation = () => {
    const router = useRouter()

    const onSuccess = (data) => {
        Cookies.set("auth_token", data?.token, {
            expires: 1
        })
        toast.success(API_ENDPOINT.AUTH.LOGIN.MESSAGE.SUCCESS, {
            postition: "top-right"
        })
        router.push("/")
    }
    const onError = (error) => {
        toast.error(API_ENDPOINT.AUTH.LOGIN.MESSAGE.ERROR, {
            postition: "top-right"
        })
    }

    return useMutation((input) => API.AuthLogin(input), {
        onSuccess,
        onError
    })
}

export const useQuoteQuery = () => {
    return useInfiniteQuery({
        option: [API_ENDPOINT.QUOTE.GET_ALL.KEY],
        queryFn: API.GET_QUOTES,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => (lastPage && lastPage.data.length) ? pages.length + 1 : undefined,
    })
}

export const useUplaodImage = ({
    updateImage
}) => {

    const onSuccess = (data) => {
        updateImage(data)
        toast.success(data?.message || API_ENDPOINT.QUOTE.UPLOAD_IMAGE.MESSAGE.SUCCESS, {
            postition: "top-right"
        })
    }

    const onError = () => {
        toast.error(API_ENDPOINT.QUOTE.UPLOAD_IMAGE.MESSAGE.ERROR, {
            postition: "top-right"
        })
    }

    return useMutation((input) => API.UPLOAD_IMAGE(input), {
        onSuccess,
        onError
    })
}

export const useUploadQuote = ({
    resetValue
}) => {

    const onSuccess = (data) => {
        resetValue()
        toast.success(API_ENDPOINT.QUOTE.POST_QUOTE.MESSAGE.SUCCESS, {
            postition: "top-right"
        })
    }

    const onError = () => {
        toast.error(API_ENDPOINT.QUOTE.POST_QUOTE.MESSAGE.ERROR, {
            postition: "top-right"
        })
    }

    return useMutation((input) => API.UPLOAD_QUOTE(input), {
        onSuccess,
        onError
    })
}