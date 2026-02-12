import type { ReactNode } from 'react';
//import Navbar from '../components/navbar';

interface LayoutProps {
  children?: ReactNode;
}

function Layout( { children }: LayoutProps ) {
  return(
    <>
      {/*<Navbar/>*/}
      <main style={{ margin: 0, padding: 0 }}>
        { children }
      </main>
    </>
  )
}

export default Layout