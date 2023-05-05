import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const login = () => {
    window.FB.login(
      (response) => {
        if (response.status === "connected") {
          console.log(response.authResponse.accessToken);
          fetch(
            `https://login-face-nine.vercel.app/api/hello?token=${response.authResponse.accessToken}`
          )
            .then((response) => response.json())
            .then((data) => console.log("data: ", data));
        }
      },
      //  { config_id: "607810021378747", response_type: "code" }
      { scope: "public_profile,pages_read_engagement" }
    );
  };
  return (
    <>
      <Head>
        <title>Face Book App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>
        <button onClick={login}>Log in</button>
      </main>
    </>
  );
}
