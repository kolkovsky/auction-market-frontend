import React from "react";
import { Roles } from "../../utils/constants";

type UserInfoProps = {
    name: string;
    email: string;
    role: Roles;
    creationDate: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, role, creationDate }) => {
    return (
        <>
            <p>{name}</p>
            <p>{email}</p>
            <p>{role}</p>
            <p>{creationDate}</p>
        </>
    );
};

export default UserInfo;