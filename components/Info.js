import styles from './styles/info.module.css'

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Bändi</h1>
                <span></span>
            </div>
            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                </p>
            </div>
        </div>
    )
  }