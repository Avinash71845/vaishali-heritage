import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api"
});

export default api;

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('vh_token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// export default api
