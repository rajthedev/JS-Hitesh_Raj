// Define a function that can  answer the role of user.
// A user can be on following roles:
// admin - with all access
// sunadmin - with access to create/delete courses
// testprep - with access to create/delete tests
// user - consume all content
// other - trial user.
// 
// Input: getUserRole(name, role)

var getUserRole = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;            
            // break;
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses`;            
            // break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;            
            // break;
        case "user":
            return `${name} is a user consume all content`;            
            // break;
         default:
            return `${name} is a trial user`
            // break;
    }
}

console.log(getUserRole("raj", "testprep"));

var getRole = getUserRole("sammy", "user");
console.log(getRole);