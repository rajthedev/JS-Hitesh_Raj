//Allow  user to access course if he is:
// Logged in from email
// Logged in from Google
// Logged in from Facebook

var email = true;
var facebook = true;
var google = false;

if (email || facebook || google){
    console.log("Login Success");
}