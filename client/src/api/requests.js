import { BASE_URL } from "./base_url";
import axios from "axios";

// Get All
export const GetAllPlatforms = async () => {
    let globalData;
    await axios.get(`${BASE_URL}/platforms`).then(res => {
        globalData = res.data;
    })
    return globalData;
}

// Get By Id
export const GetByID = async (ID) => {
    let globalData;
    await axios.get(`${BASE_URL}/platforms/${ID}`).then(res => {
        globalData = res.data;
    })
    return globalData;
}

// Delete
export const DeletePlatform = async (ID) => {
    let deletedPlatform;
    await axios.delete(`${BASE_URL}/platforms/${ID}`).then(res => {
        deletedPlatform = res.data;
    })
    return deletedPlatform;
}

// Post
export const PostPlatform = async (payload) => {
    await axios.post(`${BASE_URL}/platforms`, payload)
}