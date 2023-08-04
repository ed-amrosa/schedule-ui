import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

const responseBody = (response) => response.data;

const requests = {
    get: (url, params) => axios.get(url, params).then(responseBody),
    put: (url, params) => axios.put(url, params).then(responseBody),
    post: (url, params) => axios.post(url, params).then(responseBody)
};

const Schedules = {
    get: (id) => requests.get('/schedules/' + id),
    list: () => requests.get('/schedules'),
    update: (params) => requests.put(`/schedules/${params.id}`, params),
};

const ScheduleLogs = {
    list: (params) => requests.get('/scheduleLogs/', params)
};

const agent = {
    Schedules,
    ScheduleLogs
};

export default agent;