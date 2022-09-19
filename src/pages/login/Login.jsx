
import {React, useState} from 'react'
import { useLogin } from '../../hooks/useLogin'



// styles
const style = {
  label: `block mb-[6px]`,
  span: `block mb-[6px]`,
  input: `border border-black pt-[8px] px-[6px] text-[1em] text-black w-full`
}

const Login = () => {

//states
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const { login, error, isPending } = useLogin()


//submit 
const handleSubmit = (e) => {
  e.preventDefault()
  login(email, password);
}

  return (
    <form onSubmit={handleSubmit} className='block max-w-sm mt-15 mx-auto p-5'>
      <h2>Login</h2>
      <label className={style.label}>
        <span className={style.span}>email:</span>
        <input 
          className={style.input}
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
      </label>

      <label className={style.label}>
        <span className={style.span}>password: </span>
        <input  
          className={style.input}
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
      </label>

      {!isPending && <button className=' border border-black mt-2 p-1'>Login</button>}
      {isPending && <button disabled>loading</button>}
      {error  && <p>{error}</p>}
    </form>
  )
}

export default Login
