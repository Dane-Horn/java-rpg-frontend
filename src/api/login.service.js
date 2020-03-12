import Api from "./api";

export default {
  login(email, password) {
    return Api().post("user/login", {
      // "username": username, // this isn't required
      "email": email,
      "pword": password
    });
  }
};


// @PostMapping(path = "user/login", consumes = { "application/json" }, produces = { "application/json" })
// public String login(@RequestBody JSONObject logMeIn) throws Exception {
//     if (logMeIn.containsKey("email")) {
//         List<User> user = userRepository.findByEmail(logMeIn.getAsString("email"));
//         if (user.size() > 0) {
//             if (logMeIn.containsKey("pword")) {
//                 if (user.get(0).passwordMatch(logMeIn.getAsString("pword")))
//                     return String.valueOf(user.get(0).getUserID());
//                 else
//                     return "Incorrect password";
//             } else
//                 return "Please enter password";
//         } else
//             return "No such user";
//     }
//     return "Please enter email";
// }