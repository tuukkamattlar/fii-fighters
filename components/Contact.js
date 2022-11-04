import styles from './styles/contact.module.css'
import form from './styles/form.module.css'

export default function LandingPage() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Ota yhteyttä</h1>
                <span></span>
            </div>
            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua.
                </p>
                <ContactForm/>
            </div>
        </div>
        <div className={styles.footer}>
            <h3>Fii Fighters</h3>
            <p>fii@fighters.fi</p>
            <p>Nettisivut by Fii Fighters</p>
        </div>
        </>
    )
  }

function ContactForm(){
    return(
        <form 
            name="contact"
            method="post" 
            data-netlify="true"
            netlify = "true"
            onSubmit={''}
            className={form.form}
        >
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>
                    Nimi
                    <input 
                        onChange={''} 
                        value={''} 
                        type="text" 
                        name="name" 
                        required
                    />
                </label>
            </p>
            <p>
                <label>
                    Sähköposti
                    <input 
                        onChange=''
                        value={''} 
                        type="email" 
                        name="email" 
                        required
                    />
                </label>
            </p>
            <p className=''>
                <label>
                    Kuvaile tarvettasi
                    <textarea 
                        className={''} 
                        value = {''}
                        onChange={''} 
                        name="message" 
                        required
                    >
                    </textarea>
                </label>
            </p>
            <p>
                <button  className='' type="submit"> Lähteä</button>
            </p>
        </form>
    )
}