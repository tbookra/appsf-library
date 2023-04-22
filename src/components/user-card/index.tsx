import type { User } from "../home";
import {  useState,Dispatch,SetStateAction } from "react";
import styles from "./user-card.module.scss";


type CardProps = {
  user: User;
  handleOpen: Dispatch<SetStateAction<boolean>>;
} & React.HTMLAttributes<HTMLDivElement>;

export const UserCard = ({ user, handleOpen }: CardProps) => {
  
  const handleEditClick = (val:string) => {
    console.log(val);
    handleOpen(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.metaData}>
        <p>
          User Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}
        </p>
        <p>Email: user.email</p>
        <div className={styles.addressDiv}>
          <h2>Address:</h2>
          <p>country: {user.location.country}</p>
          <p>city: {user.location.city}</p>
          <p>
            {user.location.street.name} st. {user.location.street.number}
          </p>
        </div>
        <div className={styles.image}>
          <picture>
            <img
              src={user.picture?.medium}
              alt={`${user.name.title} ${user.name.first} ${user.name.last} pic`}
            />
          </picture>
          <button className={styles.editBtn} onClick={()=>handleEditClick(user.id.value)} >Edit</button>
        </div>
      </div>
    </div>
  );
};
