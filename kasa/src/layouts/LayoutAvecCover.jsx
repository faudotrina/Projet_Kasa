import { Outlet } from 'react-router-dom'
import Banner from '../components/Banner/Banner.jsx'

function LayoutAvecCover() {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  )
}

export default LayoutAvecCover
