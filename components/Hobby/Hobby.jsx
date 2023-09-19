import React from "react";
import styles from "./style.module.css";
import {IoBookSharp} from 'react-icons/io5'

const Hobby = () => {
  return (
    <div className={styles.main}>
      <div className={styles.innerDiv}>
        <div className={styles.heading}>
          <h1>Hobby</h1>
          <p>Few habits which i resolve for the past few years.</p>
        </div>
        <div className={styles.hooby_section}>
          <div className={styles.inner_section}>
            <div className={styles.booksHobbySection}>
              <IoBookSharp size={100} />
              <h1>Reading Books</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minus asperiores cumque eius error aspernatur explicabo. Iusto officia alias necessitatibus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
