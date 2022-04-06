import classes from './Widgets.module.css'
import SearchTwitter from './search-twitter/SearchTwitter'
import TopNews from './top-news/TopNews'
import Suggestions from './suggestions/Suggestions'
import SearchCard from './search-twitter/SearchCard'
// import { useState } from 'react'
const Widgets = (props) => {
  //   const [focus, setFocus] = useState(false)
  //   const inputFocusHandler = () => {
  //     setFocus(true)
  //   }
  //   const searchInputClasses = !focus
  //     ? classes.search
  //     : `${classes.search} ${classes.focus}`
  //   const iconClasses = !focus ? classes['search-icon'] : classes['icon-focus']

  return (
    <section className={classes.widgets}>
      <div className={classes['widgets-container']}>
        <SearchTwitter />

        {/* Search twitter End */}
        <TopNews />
        {/* News Section End */}
        <Suggestions />
      </div>
    </section>
  )
}

export default Widgets
