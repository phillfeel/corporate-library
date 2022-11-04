import { Link } from "react-router-dom";
import UserIcon from "../../resources/images/userIcon.png";

import styles from "./Profile.module.css";

const Profile: React.FC = () => {
  return (
    <Link to="/corporate-library/profile">
      <img className={styles.userIcon} width={50} src={UserIcon} alt="user" />
    </Link>
  );
};

export default Profile;
