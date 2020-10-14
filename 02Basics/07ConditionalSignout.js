// show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// if (authenticated){
//     console.log("show signout button");
// } else {
//     console.log("Show login Button");
// }

authenticated ? console.log("show singout button") : console.log("login");