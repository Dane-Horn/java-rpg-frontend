import Api from "./api";
import { store } from "../store/store";

export default {
  updateUserInformation(username, email, password) {
    return Api().put("/user/update/", {
      // as long as one of the fields are filled
      "userID": store.state.userID,
      "username": username,
      "email": email,
      "pword": password
    });
  }
};

// @PutMapping(path = "/user/update/", consumes = { "application/json" })
// public String UpdateUserInformation(@RequestBody JSONObject values) {
//     int check = userRepository.updateUser(values);
//     if (check > 0)
//         return "Update successful";
//     else
//         return "Update failed";
// }