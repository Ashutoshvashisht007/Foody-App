import Footer from './footer/Footer'
import Header from './header/Header'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout