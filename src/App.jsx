import './App.css'
import MUIAccordion from './components/MUIAccordion'
import MUIAppbar from './components/MUIAppbar'
import MUIAutcomplate from './components/MUIAutcomplate'
import MUIAvatar from './components/MUIAvatar'
import MUIBadges from './components/MUIBadges'
import MUIButton from './components/MUIButton'
import MUICard from './components/MUICard'
import MUICheckbox from './components/MUICheckbox'
import MUIDrawer from './components/MUIDrawer'
import MUIGrid from './components/MUIGrid'
// import MUIImageList from './components/MUIImageList'
import MUISelect from './components/MUISelect'
import MUIStack from './components/MUIStack'
import MUIText from './components/MUIText'

function App() {

  return (
    <div>
      <MUIButton/>
      <MUIText/>
      <MUISelect/>
      <MUICheckbox/>
      <MUIAutcomplate/>
      <MUIStack/>
      <MUIGrid/>
      <MUICard/>
      <MUIAccordion/>
      <MUIAppbar/>
      {/* <MUIImageList/> */}
      <MUIDrawer/>
      <MUIBadges/>
      <MUIAvatar/>
    </div>
  )
}

export default App
