import Api from "./api";
import { store } from "../store/store";

export default {  
  getUserInformation() {
    return Api().get("/user/request/" + store.state.userID)
  }
};


// @RequestMapping("/user/request/{userID}")
// public Optional<User> getUserInformation(@PathVariable("userID") long userID) {
//     return userRepository.findById(userID);
// }

