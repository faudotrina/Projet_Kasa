import { Outlet } from 'react-router-dom';
import Cover from '../components/Cover';

function LayoutAvecCover() {
  return (
    <>
      <Cover />
      <Outlet />
    </>
  );
}

export default LayoutAvecCover;
