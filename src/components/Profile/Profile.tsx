import React from "react";
import UserIcon from "../../resources/images/userIcon.png";

import styles from "./Profile.module.css";

const Profile: React.FC = () => {
  return (
    <div>
      <img className={styles.userIcon} width={50} src={UserIcon} alt="user" />
    </div>
  );
};

export default Profile;
