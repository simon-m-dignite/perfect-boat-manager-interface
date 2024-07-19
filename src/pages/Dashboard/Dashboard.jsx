import React from 'react'
import CreateTask from './CreateTask'

const Dashboard = () => {
  return (
    <div className='w-full p-6 flex flex-col gap-6 h-auto min-h-screen overflow-y-auto pb-10'>
      <CreateTask/>
    </div>
  )
}

export default Dashboard
