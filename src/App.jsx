import "./styles.css"
import Videos from './fetchVideos.jsx'
import Header from './Header.jsx'
import SidePanel from './SideBar.jsx'

export default function App() {
  return (<>
    <div className="header">
      <Header />
    </div>
    <div className="side-panel">
      <SidePanel />
    </div>
    <div className="body-div">
      <Videos />
    </div>
    </>)
}