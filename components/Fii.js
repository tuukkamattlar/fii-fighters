import styles from './styles/info.module.css'

export default function Fii() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Fii Fighters</h1>
                <span></span>
            </div>
            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                </p>
            </div>
        </div>
    )
  }