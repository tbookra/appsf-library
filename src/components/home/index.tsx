import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './home.module.scss'
import { EditModal } from "../edit-modal";
import type { RootState, AppDispatch } from "../../store";
import { setUsers } from "../../store/actions/userActions";
import { UserCard } from "../user-card";
import axios from "axios";



export interface User {
  email: string;
  id: {
    name: string;
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: number;
    state: string;
    street: {
      number: number;
      name: string;
    };
  };
}

export const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const users = useSelector((state: any) => state.users);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await axios.get("https://randomuser.me/api/", {
        params: { results: 10 },
      });
      dispatch(
        setUsers(
          usersData.data.results.map((user: User) => ({
            name: user.name,
            email: user.email,
            location: user.location,
            id: user.id.value ? user.id : {value :`${Math.random()}`},
            picture: user.picture,
          }))
        )
      );
    };
    fetchUsers();
  }, [dispatch]);
  console.log("users", users);

  return (
    <div className={styles.mainContainer} >
      {users.length && users.map((user: User) => <UserCard user={user} handleOpen={handleOpen} />)}
      <div>
      {open && <EditModal handleClose={handleClose} />}

    </div>
    </div>
  );
};
