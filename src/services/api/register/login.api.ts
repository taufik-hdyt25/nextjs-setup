import callAPI from "@/utils/fetcher"

export const loginAPI = async (payload:any)=> {
    const res = await callAPI({
        method: "POST",
        payload,
        uri: ""
    })
    return res.data
}

