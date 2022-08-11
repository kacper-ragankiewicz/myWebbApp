import React from "react";
import styles from "./Contact.module.sass";


const Contact = ({ className }) => {

    return (
        <>
            <div className={styles.body}>
                <button className={styles.head}>
                    <span className={styles.span}>Contact</span>
                </button>
            </div>
        </>
    )
}
export default Contact;