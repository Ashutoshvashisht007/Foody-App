import TopNav from './TopNav'
import MainBar from './MainBar'

const Header = () => {
  return (
    <div className='w-screen h-[142px] border border-[#E9E9E9] shadow-sm '>
      <TopNav />
      <MainBar />
    </div>
  )
}

export default Header