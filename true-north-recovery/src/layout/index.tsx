import type { ReactNode } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

interface LayoutProps {
  children?: ReactNode;
}

function Layout( { children }: LayoutProps ) {
  return(
    <>
      <Navbar/>
      <main style={{ margin: 0, padding: 0 }}>
        { children }
      </main>
      {/*<CallToAction />*/}
      <Footer />
    </>
  )
}

export default Layout