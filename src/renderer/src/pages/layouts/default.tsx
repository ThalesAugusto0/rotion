import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

export function Default() {
  return (
    <div className="h-screen w-screen bg-rotion-900 text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
