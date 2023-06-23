import axios from "axios";
const BASE_URL = "http://localhost:8585/";
const ALLPLACES_URL = "http://localhost:8585/allplaces";
const LOGIN_URL = "http://localhost:8585/user/login";
const ADMINLOGIN_URL = "http://localhost:8585/admin/login";
const APPROVE_ADMINURL = "http://localhost:8585/admin/approval";
const REMOVE_ADMINURL = "http://localhost:8585/admin/removal";
const ADDJOB_URL = "http://localhost:8585/jobs-admin/add-job";
// const GETJOBLIST_URL = "http://localhost:8585/jobs-admin/get-list";
const GET_DATED_JOB_LIST_URL = "http://localhost:8585/jobs-admin/get-job-list";
const GET_COMPLAINT_LIST_URL = "http://localhost:8585/grievancelist";


export async function getAllPlace() {
  return axios.post(`${BASE_URL}/place`);
}
export async function addPlace(add) {
  return axios.post(`${BASE_URL}/place/add${add}`);
}

export async function getPlaceById(id) {
  return axios.post(`${BASE_URL}/place/${id}`);
}

export async function deletePlace(pid) {
  return axios.delete(`http://localhost:8585/place/delete/${pid}`);
}

//-my profile
export async function getUsersFromServer(email) {
  return axios.get(`http://localhost:8585/userprofile/${email}`);
}
//--------- get all places----------
export async function getAllPlacesFromServer() {
  return axios.get(ALLPLACES_URL);
}
//-----------my griveances--------------
export async function getMyGrievsFromServer(email) {
  return axios.get(`http://localhost:8585/mygrievancelist/${email}`);
}
//--------- user login details ----------
// export async function getLoginDetailsFromServer(formValues) {
//   return axios.post(LOGIN_URL, formValues);
// }

//--------- user login details ----------
export async function getLoginDetails(formValues) {
  return axios.post(LOGIN_URL, formValues);
}

//--------- admin login details  ----------
export async function getAdminLoginDetailsFromServer(formValues) {
  return axios.post(ADMINLOGIN_URL, formValues);
}

//--------------admin approval---------------
export async function getAllUnauthenticated() {
  return axios.get("http://localhost:8585/user/authenticate");
}
//----------------approve admin------
export async function approveAdmin(email) {
  return axios.post(`${APPROVE_ADMINURL}/${email}`);
}

//--------------admin removal---------------
export async function getAllAuthenticated() {
  return axios.get("http://localhost:8585/user/admins");
}
//----------------remove admin------
export async function removeAdmin(email) {
  return axios.post(`${REMOVE_ADMINURL}/${email}`);
}

//----------------update status to in progress------
export async function updateStatusInServer(gid) {
  return axios.put(`http://localhost:8585/grievance/update/${gid}`);
}

//--------- add jobs----------
export async function addJobFromServer(addedJob) {
  return axios.post(ADDJOB_URL, addedJob);
}

//--------- get all jobs----------
// export async function getAllJobsFromServer() {
//   return axios.get(GETJOBLIST_URL);
// }

//--------- get dated jobs----------
export async function getDatedJobsFromServer() {
  return axios.get(GET_DATED_JOB_LIST_URL);
}

//--------- get all complaints----------
export async function getAllComplaints() {
  return axios.get(GET_COMPLAINT_LIST_URL);
}
