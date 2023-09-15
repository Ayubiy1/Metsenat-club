export const getSponsors = (api) => api.get("/sponsors");
export const getSponsor = (api, id) => api.get(`/sponsors/${id}`);

export const putSponsors = (api, id, data) => api.put(`/sponsors/${id}`, data);

export const putSponsor = (api, id, data) => console.log(data);

export const getStudents = (api) => api.get("/students");
export const getStudent = (api, id) => api.get(`/students/${id}`);
export const putStudents = (api, id, data) => api.put(`/students/${id}`, data);
