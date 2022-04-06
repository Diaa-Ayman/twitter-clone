import classes from './SearchCard.module.css'
import Card from '../../../ui/Card'
const SearchCard = (props) => {
  return <Card className={classes['search-card']}>{props.children}</Card>
}
export default SearchCard
