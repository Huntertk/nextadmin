import styles from '@/app/ui/login/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" name='username' placeholder='username'  />
        <input type="password" name='password' placeholder='XXXXXXXX'  />
        <button>Login</button>
      </form>
    </div>

  )
}

export default Login