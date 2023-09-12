import Profile from './components/profile/Profile'
import Links from './components/links/Links'
import Tabs from './components/tabs/Tabs'
import Topnav from './components/topnav/Topnav'
import Nav from './components/nav/Nav'

function App() {

  return (
    <div className='flex flex-col items-center justify-center'>
      <Topnav />
      <Profile />
      <Links />
      <Tabs />
      <Nav /> 
    </div>
  )
}

export default App
