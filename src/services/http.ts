import axios from "axios"

export const http = axios.create({
    headers: {
        "Content-type": "application/json",
    },
    baseURL: "http://127.0.0.1",
});