import Api from "./api";

export default {
  forgotPassword(email) {
    return Api().post("/user/forgotpassword", {
      // "username": username, // this isn't required
      "email": email
    });
  }
};


// @PostMapping("/user/forgotpassword")
// public String forgotPassword(@RequestBody JSONObject value) {
//     if (value.containsKey("email")) {
//         List<User> user = userRepository.findByEmail(value.getAsString("email"));
//         System.out.println("Forgot" + value.getAsString("email"));
//         if (user.size() > 0) {
//             String randompw = getAlphaNumericString(8);
//             JSONObject newpword = new JSONObject();
//             newpword.appendField("userID", user.get(0).getUserID());
//             newpword.appendField("pword", randompw);
//             userRepository.updateUser(newpword);
//             sendEmail(value.getAsString("email"), "New Password" ,"This is your new password -> " + randompw);
//             return "Check your email";
//         } else
//             return "No such email found";
//     } else
//         return "please enter an email";
// }