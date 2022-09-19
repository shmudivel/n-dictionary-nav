import {React, useState} from 'react'
import { useSignup } from '../../hooks/useSignup'


// styles
const style = {
  label: `block mt-[30px] mx-auto`,
  span: `block mb-[6px]`,
  input: `border border-black pt-[8px] px-[6px] text-[1em] text-black w-full`
}

const Signup = () => {

  //states
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [displayName, setDisplayName] = useState('')
const { signup, isPending, error } = useSignup()

//submit 
const handleSubmit = (e) => {
  e.preventDefault()
  signup(email, password, displayName);
}

  return (
    <form onSubmit={handleSubmit} className='block max-w-[360px] mx-auto mt-[60px] p-[20px] '>
      <h2>Signup</h2>
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

      <label className={style.label}>
        <span className={style.span}>display name: </span>
        <input  
          className={style.input}
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          />
      </label>
      

      {!isPending && <button className=' border border-black mt-2 p-1'>Signup</button>}
      {isPending && <button className='' disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup
