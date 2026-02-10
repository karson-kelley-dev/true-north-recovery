import type { ReactNode } from 'react';
import Navbar from '../components/navbar';

interface LayoutProps {
  children?: ReactNode; // Recommended for most cases
}

function Layout( { children }: LayoutProps ) {
  return(
    <>
      <Navbar/>
      <div>
      { children }
      </div>
    </>
  )
}

export default Layout