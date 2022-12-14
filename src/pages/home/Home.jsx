import React from 'react'
import { useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'


//components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'


//styles
const style = {
  container: `grid grid-cols-1 max-w-4xl my-[60px] mx-auto`,
  content: `pr-[30px]`,
  sidebar: `pl-[30px]`,
}

const Home = () => {
  const { user } = useAuthContext()
  const{ documents, error } = useCollection('transactions')

  return (
    <div className={style.container}>

      <div className={style.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>

      <div className={style.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents}/>}
      </div>
    </div>
  )
}

export default Home
