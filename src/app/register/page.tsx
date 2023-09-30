import styles from './register.module.css'

const RegisterPage = () => {



    return (
        <div className={styles.container}>
            <div className={styles.container_box}>
            <form action="" className={styles.form}>
                <div className={styles.container_inputs}>

                    <div className={styles.labe_input_group}>
                        <label htmlFor="" className={styles.labes}>Email</label>
                        <input type="text" name='email' placeholder="Email" className={styles.inputs} />
                    </div>

                    <div className={styles.labe_input_group}>
                        <label htmlFor="" className={styles.labes}>Password</label>
                        <input type="password" name="password" placeholder="Password" className={styles.inputs} />
                    </div>
                    <div className={styles.labe_input_group}>
                <button className={styles.buton_register}>Register</button>
                </div>
                    
                </div>
                
            </form>
            </div>
        </div>
    )
}


export default RegisterPage