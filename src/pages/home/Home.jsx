import React from 'react'
import { useAuthContext} from '../../hooks/useAuthContext'


//components
import TransactionForm from './TransactionForm'


//styles
const style = {
  container: `grid grid-cols-1 max-w-4xl my-[60px] mx-auto`,
  content: `pr-[30px]`,
  sidebar: `pl-[30px]`,
}

const Home = () => {
  const { user } = useAuthContext()

  return (
    <div className={style.container}>

      <div className={style.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>

      <div className={style.content}>
        transaction list
      </div>
    </div>
  )
}

export default Home
