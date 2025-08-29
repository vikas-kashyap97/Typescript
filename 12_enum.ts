enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles;
}

const user1: LoginDetails = {
    name: "Vikas Kashyap",
    email: "vikaskashyap@gmail.com",
    password: "Vikas@123",
    role: Roles.admin
}

const user2: LoginDetails = {
    name: "Neha Rawat",
    email: "neharawat@gmail.com",
    password: "Neha@123",
    role: Roles.user
}

const isAdmin = (user: LoginDetails): string => {
    const { name, email, role } = user;
    return role === "admin"
        ? `${email} is an Admin and allowed to edit the Website.` : `${email} is a User and not allowed to edit the Website.`;
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
