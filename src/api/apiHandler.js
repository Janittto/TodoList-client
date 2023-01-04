import axios from "axios";

const apiHandler = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

apiHandler.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.data) {
    console.log(error.data && error.data.message);
    throw error;
  }
  throw error;
}

// apiHandler.signup = (userInfo) => {
// 	return apiHandler
// 		.post("/api/auth/signup")
// 		.then((res) => res.data)
// 		.catch(errorHandler)
// }

const service = {
  // Service is spread to have access to the basics get/post...
  ...apiHandler,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  newList(listInfo) {
    return service
      .post("/api/todo/new-list", listInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getList() {
    return service
      .get("api/todo")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneList(listInfo) {
    return service
      .get(`api/todo/${listInfo}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  editList(listInfo, values) {
    return service
      .patch(`api/todo/${listInfo}`, values)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteTasksList(listInfo) {
    return service
      .delete(`api/todo/${listInfo}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  newSingleTask(listInfo, values) {
    return service
      .post(`api/todo/${listInfo}`, values)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteSingleTask(taskInfo) {
    return service
      .delete(`api/todo/singleTask/${taskInfo}`, taskInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // getAllTheCats() {
  // 	return service
  // 		.get("/api/cats")
  // 		.then((res) => res.data)
  // 		.catch(errorHandler);
  // },
};

// export default apiHandler

export default service;
