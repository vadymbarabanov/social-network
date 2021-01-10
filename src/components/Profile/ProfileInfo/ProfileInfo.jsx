import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import userMale from "../../../assets/images/userMale.png";

// Importing components
import Preloader from "../../common/preloader/Preloader";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        console.log(formData);
        props.updateProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    const initialFormValues = {
        fullName: props.profile.fullName,
        aboutMe: props.profile.aboutMe,
        lookingForAJob: props.profile.lookingForAJob,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        contacts: { ...props.profile.contacts },
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageBox}>
                <img
                    alt="Alt text"
                    className={styles.userImage}
                    src={
                        props.profile.photos.large ||
                        props.profile.photos.small ||
                        userMale
                    }
                />
                {props.isOwner ? (
                    <input
                        className={styles.inputFile}
                        type={"file"}
                        onChange={onMainPhotoSelected}
                    />
                ) : null}
            </div>
            <div className={styles.profileData}>
                {editMode ? (
                    <ProfileDataForm
                        profile={props.profile}
                        onSubmit={onSubmit}
                        initialValues={initialFormValues}
                    />
                ) : (
                    <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        updateStatus={props.updateStatus}
                        status={props.status}
                    />
                )}
                {props.isOwner && !editMode ? (
                    <button
                        className={styles.profileEditBtn}
                        onClick={() => setEditMode(true)}>
                        <i className="fas fa-user-edit"></i>
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default ProfileInfo;
