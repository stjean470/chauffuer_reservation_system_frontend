import React, {useState} from 'react'
import AdminNav from '../../AdminNav'
import ReservationTable from '../../components/chauffeur/ReservationTable'

const Dashboard = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`w-full ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"} min-h-screen`}>
        <AdminNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ReservationTable />
    </div>
  )
}

export default Dashboard