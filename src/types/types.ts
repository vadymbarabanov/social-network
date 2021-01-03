export type PostType = {
    id: number;
    text: string;
    likesCount: number;
};
export type ContactsType = {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
};
export type PhotosType = {
    large: string | null;
    small: string | null;
};
export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ContactsType;
    photos: PhotosType;
};
export type UserType = {
    id: number;
    name: string;
    status: string;
    followed: boolean;
    photos: PhotosType;
};
