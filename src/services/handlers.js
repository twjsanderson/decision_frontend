import apiService from "./api";

export const getUserHandler = async (id, token) => {
    try {
       const response = await apiService.get('/user/get', id, token);
       return response;
    } catch (err) {
        console.log('ERROR in getUserHandler: ', err)
    }
}

export const setUserHandler = async(user, token) => {
    try {
        const response = await apiService.post('/user/create', user, token)
        return response
    } catch (err) {
        console.log('ERROR in setUserHandler: ', err)
    }
}

