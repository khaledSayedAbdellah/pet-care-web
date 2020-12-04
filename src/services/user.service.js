import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://pet-care-iti.herokuapp.com/';

class UserService {
//   getPublicContent() {
//     return axios.get(API_URL + 'all');
//   }

getUserBoard() {
  return axios.get(API_URL + 'user', { headers: authHeader() });

}

//   getModeratorBoard() {
//     return axios.get(API_URL + 'doctor', { headers: authHeader() });
//   }

//   getAdminBoard() {
//     return axios.get(API_URL + 'admin', { headers: authHeader() });
//   }
}

export default new UserService();
