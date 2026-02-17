import type { ReactNode } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

interface LayoutProps {
  children?: ReactNode;
}

function Layout( { children }: LayoutProps ) {
  return(
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Navbar/>
      {/* Spacer to account for fixed navbar */}
      <div style={{ height: '76px' }} />
      <main style={{ margin: 0, padding: 0, flex: '1 0 auto', marginBottom: '88px' }}>
        { children }
      </main>
      {/*<CallToAction />*/}
      <Footer />
    </div>
  )
}

export default Layout