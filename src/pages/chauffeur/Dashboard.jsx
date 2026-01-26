import React from 'react'
import AdminNav from '../../AdminNav'
import ReservationTable from '../../components/chauffeur/ReservationTable'

const Dashboard = () => {
  return (
    <div className='w-full'>
        <AdminNav />
        <ReservationTable />
    </div>
  )
}

export default Dashboard