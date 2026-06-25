import api from "./api";

interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export const login = (
    credentials: LoginRequest
) => {
    return api.post("/auth/login", credentials);

};

export const register = (
    userData: RegisterRequest
) => {
    return api.post("/users/register", userData);
};

export const getCurrentUser = () => {
    return api.get("/users/current");
};