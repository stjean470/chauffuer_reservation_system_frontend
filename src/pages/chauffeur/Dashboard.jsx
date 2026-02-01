import React, {useState} from 'react'
import AdminNav from '../../AdminNav'
import ReservationTable from '../../components/chauffeur/ReservationTable'
import AdminSidebar from '../../components/chauffeur/AdminSidebar';

const Dashboard = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`w-full ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"} min-h-screen`}>
        <AdminNav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isOpen={isOpen} setIsOpen={setIsOpen} />
        <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ReservationTable />
    </div>
  )
}

export default Dashboard