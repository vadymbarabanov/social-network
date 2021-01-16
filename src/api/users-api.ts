import { instance } from "./api";
import { GetItemsType, APIResponseType } from "./api";
import { UserType } from "../types/types";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = "") {
        return instance
            .get<GetItemsType<UserType>>(
                `users?page=${currentPage}&count=${pageSize}&term=${term}`
            )
            .then((res) => res.data) as Promise<GetItemsType<UserType>>;
    },

    follow(userId: number) {
        return instance
            .post<APIResponseType>(`follow/${userId}`, {})
            .then((res) => res.data) as Promise<APIResponseType>;
    },

    unfollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then((res) => res.data) as Promise<APIResponseType>;
    },
};
