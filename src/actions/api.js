import axios from "axios";

export const API_TYPES = {
    USER: "http://localhost:7000/User",
    CAR: "http://localhost:7000/Car",
    SPENDINGS: "http://localhost:7000/Spendings",
    COSTS: "http://localhost:7000/Costs",
    TRANSACTIONS: "http://localhost:7000/Transactions",
}

/**
 * 
 */
export default {

    request(url) {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url,newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id),
            userLogin: user => axios.post(url + "/login", user),
            userRegister: (password,user)=> axios.post(url + `/register?password=${password}`,user)
        }
    }
}


