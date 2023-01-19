import axios from "axios";

export const getProducts = (params={}) => {
    return axios.get(`http://localhost:5000/home-decor?`,{
        params: {
            _page: params.page,
            _limit: params.limit,
           

        }
    })
};


