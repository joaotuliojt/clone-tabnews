import styles from "../styles/home.module.css";

function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>AgroTab - Conteúdos do mundo Agro</h1>
        <p className={styles.phrase}>
          O seu portal <b>confiável</b> para informações <b>atualizadas</b>{" "}
          sobre o mundo da <b>agricultura</b>
        </p>
        <p>
          Seja você um agricultor experiente, um entusiasta da vida rural ou
          alguém interessado em aprender mais sobre o setor agrícola, você está
          no lugar certo! Estamos empolgados em apresentar o nosso blog de
          notícias dedicado ao mundo da agricultura, onde você encontrará
          informações, insights e análises sobre os mais recentes
          desenvolvimentos e tendências no campo agrícola.
        </p>
      </div>
    </main>
  );
}

export default Home;
