import Api from "./api";
import { store } from "../store/store";

export default {
  deleteUser() {
    return Api().delete("/user/delete/" + store.state.userID);
  }
};

// @DeleteMapping("/user/delete/{userID}")
// public String deleteUser(@PathVariable Long userID) {
//     User user = userRepository.getOne(userID);
//     userRepository.delete(user);
//     return "deleted";
// }
