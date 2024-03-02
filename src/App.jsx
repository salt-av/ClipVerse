import "./styles.css"
import Videos from './fetchVideos.jsx'
import Header from './Header.jsx'
import SidePanel from './SideBar.jsx'

export default function App() {
  const [search, setSearch] = useState('');
  return (<>
    <div className="header">
      <Header search={search} setSearch={setSearch} />
    </div>
    <div className="side-panel">
      <SidePanel />
    </div>
    <div className="body-div">
      <Videos search={search} />
    </div>
    </>)
}