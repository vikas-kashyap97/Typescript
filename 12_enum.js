var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Vikas Kashyap",
    email: "vikaskashyap@gmail.com",
    password: "Vikas@123",
    role: Roles.admin
};
var user2 = {
    name: "Neha Rawat",
    email: "neharawat@gmail.com",
    password: "Neha@123",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === "admin"
        ? "".concat(email, " is an Admin and allowed to edit the Website.") : "".concat(email, " is a User and not allowed to edit the Website.");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
