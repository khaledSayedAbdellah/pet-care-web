import axios from "axios";

const API_URL = "https://pet-care-iti.herokuapp.com/";

class AuthVetService {
  login(email, password) {
    return axios
      .post(API_URL + "api/doctors/login", {
        email,
        password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem('doctor', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('doctor');
  }

  register(name, email, password,address) {
    return axios.post(API_URL + "api/doctors/signup", {
      name,
      email,
      password,
      address
    });
  }

  getCurrentDoctor() {
    return JSON.parse(localStorage.getItem('doctor'));;
  }
}

export default new AuthVetService();
