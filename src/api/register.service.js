import Api from "./api";

export default {
  register(username, email, password) {
    return Api().post("/user/register", {
      "username": username,
      "email": email,
      "pword": password
    });
  }
};


// @PostMapping("/user/register")
// public String register(@Validated @RequestBody User user) {
//     List<User> check = userRepository.findByUsername(user.getUsername());
//     if (check.size() == 0) {
//         System.out.println(user.toString());
//         userRepository.save(user);
//         return "success added";
//     }
//     return "User already exist";
// }