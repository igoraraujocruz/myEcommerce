import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.foterContainer}>
      <div className={styles.footerContent}>
        <nav>
          <p>Todos os direitos reservados.</p>
        </nav>
      </div>
    </footer>
  );
}
