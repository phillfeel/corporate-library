import { Link } from "react-router-dom";
import UserIcon from "../../resources/images/userIcon.png";

import styles from "./Profile.module.css";

const Profile: React.FC = () => {
  return (
    <Link className={styles.userIcon} to="/corporate-library/profile">
      <img width={50} src={UserIcon} alt="user" />
    </Link>
  );
};

export default Profile;
