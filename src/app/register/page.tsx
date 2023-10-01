import styles from './register.module.css'
import GoogleIcon from '../../../assets/svgComponent/Google'
import UserIcon from '../../../assets/svgComponent/User'
import LockIcon from '../../../assets/svgComponent/Lock'
// import GoogleIcon from '../../../assets/google_icon.svg'

const RegisterPage = () => {



    return (
        <>
            <div className={styles.containerBody}>
                <div className={styles.formContainer}>
                    <div className={styles.signIn_SingnUp}>
                        <form action="" className={styles.signInForm}>
                            <h2 className={styles.title}>Sign in</h2>

                            <div className={styles.inputField}>
                                <i className={styles.icono_fas_fa_user} >< UserIcon /></i>
                                <input type="email" placeholder="Email" required />
                            </div>
                            <div className={styles.inputField}>
                                <i className={styles.icono_fas_fa_user} >< LockIcon /></i>
                                <input type="password" placeholder="Password" required />
                            </div>
                            <input type="submit" value="Login" className={styles.btn} />
                            <p className={styles.socialText}>Or Sign in Google</p>
                        </form>
                    </div >

                    <div className={styles.socialMediaContainer}>
                        <div className={styles.googleButton}>
                            <button className={styles.buttonGoogle}>
                                <i className={styles.iconoGoogles} ><GoogleIcon /></i>
                                Sign in with Google</button>
                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}


export default RegisterPage