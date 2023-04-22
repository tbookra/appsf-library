import styles from './edit-maodal.module.scss'
import {Dispatch,SetStateAction,FormEvent,MouseEventHandler} from 'react';
import { EditForm } from '../edit-form';

type ModalProps = {
    handleClose: Dispatch<SetStateAction<boolean>>;
  } & React.HTMLAttributes<HTMLDivElement>;
export const EditModal = ({handleClose}:ModalProps) => {
    const handleClickOutside = (e:any, bool: boolean) =>{
        e.stopPropagation()
        handleClose(bool)
    }
    return (
        <>
        <div className={styles.editContainer} onClick={(e)=>handleClickOutside(e,false)} >
            <div className={styles.box}  >
            </div>
        </div>
            <div onClick={(e:any)=>e.stopPropagation()}>

                <EditForm  />
            </div>
        </>
    )
}