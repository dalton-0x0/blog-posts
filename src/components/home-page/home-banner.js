import Image from "next/image";

import styles from "./home-banner.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="An image showing Dalton"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Dalton</h1>
      <p>I blog about web development and software engineering in general.</p>
    </section>
  );
}

export default Hero;
