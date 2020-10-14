//User is onlu allowed to make a purchase when he is:
// Logged in
// email verified
//cardInfo-verified
// If any one is missing, stop purchase

var isLoggedIn = false;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn){
//     console.log("Logged in success");
//     if (isEmailVerified){
//         console.log("email is verified");
//         if (cardInfo){
//             console.log("you can make a purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
} else {
    console.log("you are not allowed to purchase");
}