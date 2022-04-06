import classes from './SearchTwitter.module.css'
import Input from '../../../ui/Input'
import { FiSearch } from 'react-icons/fi'
import SearchCard from './SearchCard'
import { useState } from 'react'
const SearchTwitter = (props) => {
  const [isFocus, setIsFocus] = useState(false)
  const focusHandler = () => {
    setIsFocus(true)
  }
  const focusOutHandler = () => {
    setIsFocus(false)
  }
  const searchClasses = isFocus
    ? `${classes.search} ${classes['on-focus']}`
    : classes.search
  return (
    <div
      onFocus={focusHandler}
      onBlur={focusOutHandler}
      className={searchClasses}
    >
      <div>
        <FiSearch className={classes['search-icon']} />
      </div>
      <div>
        <Input
          input={{
            type: 'search',
            placeholder: 'Search twitter',
          }}
        />
      </div>
    </div>
  )
}

export default SearchTwitter
