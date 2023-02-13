import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/MainContainer.module.css";


export default function ContentCard() {
    const router = useRouter();
  
    return (
        <div>
        <div className={styles.title}>What do we do ?</div>
        <p className={styles.whatwedo}>
          <ul>
            <li>WictroniX offers a comprehensive & integrated end-to-end solution
          needed to launch and grow a startup or business. </li>
          <li>Making a quality product is one thing; building, expanding, and maintaining a
          business that revolves around that product is quite another.
          WictroniX makes sure that you concentrate on your product, which is
          what you are best at, and that we will take care of all the other
          business-related elements.</li>
          <li>WictroniX helps a startup or business in all aspects such as from product Development, Tech, Marketing,Management, Market reserach, HR,
             Finance, Complainces, Business strategy, raising funds, networking etc.</li>
          <li>You = Focus on your Product.<br></br>WictroniX = Looks after all other elements (just like a co-founder).</li>
          <li>We aim to solve the burning hair problems of the courageous and inovative entrepreneurs so that they can create value in society and achieve their dreams.</li>
          </ul> 
        </p>
        </div>
    );
  }