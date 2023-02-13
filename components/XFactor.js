import React from "react";
import ParallaxSeg from "../components/ParallaxSeg";
import styles from "../styles/XFactor.module.css";
import bgImg from "../public/images/fields.png";

export default function XFactor() {
  return (
    <>
      <ParallaxSeg title="The X-Factor" bgImg={bgImg}>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim
          alias, a ratione dignissimos reprehenderit eligendi ut suscipit
          laboriosam cumque obcaecati similique expedita porro maiores dolor
          magnam placeat, laborum illum numquam impedit? Sapiente, laudantium
          et. Odio dicta est rerum temporibus debitis non omnis vero iure a
          labore aliquam corporis nisi delectus, tenetur quo perspiciatis neque!
          Vero mollitia illo delectus ullam nostrum aliquam repudiandae sunt ab,
          ratione provident. Vero id placeat debitis ab, consequuntur quis.
          Dolorum est quasi quae repellendus adipisci aspernatur fugit
          reiciendis non dignissimos quam quidem quod at inventore ducimus
          voluptatem repellat consequatur minus, enim fugiat nisi facere
          maiores.
        </div>
      </ParallaxSeg>
    </>
  );
}
