import React from 'react'


//components
import TransactionForm from './TransactionForm'


//styles
const style = {
  container: `grid grid-cols-1 max-w-4xl my-[60px] mx-auto`,
  content: `pr-[30px]`,
  sidebar: `pl-[30px]`,
}

const Home = () => {
  const { user } = useAuth

  return (
    <div className={style.container}>

      <div className={style.sidebar}>
        <TransactionForm />
      </div>

      <div className={style.content}>
        transaction list
      </div>
    </div>
  )
}

export default Home
