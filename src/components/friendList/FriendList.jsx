import FriendListItem from "./FriendListItem.jsx";
import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

const FriendList = ({friends,}) =>(
    <ul className={css.friendList}>     
     {friends.map(friend => (<FriendListItem key={friend.id} friend={friend}/>))}
    </ul>   
  );                     
  FriendList.propTypes = {  
    friends: PropTypes.array,
  };
export default FriendList;
  