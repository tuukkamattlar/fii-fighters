import styles from './styles/landing.module.css'

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.imgLogo}>
                <img src={'/bg.jpg'}/>
            </div>
            <div className={styles.head}>
                <div className={styles.title}>
                    <h1>Fii Fighters</h1>
                    <span></span>
                    <p>Maailman fyssalaisin bändi</p>
                </div>
            </div>
        </div>
    )
  }