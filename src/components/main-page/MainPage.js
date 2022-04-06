import classes from './MainPage.module.css'
import Sidebar from './Sidebar/Sidebar'
import Feed from './feed/Feed'
import Widgets from './widgets/Widgets'
const MainPage = (props) => {
  return (
    <section className={classes['main-page']}>
      <Sidebar />
      <Feed />
      <Widgets />
    </section>
  )
}

export default MainPage
