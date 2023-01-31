import FriendListItem from "./FriendListItem.jsx";
import PropTypes from 'prop-types';

const FriendList = ({friends,}) =>(
    <ul className="friend-list">     
     {friends.map(friend => (<FriendListItem key={friend.id} friend={friend}/>))}
    </ul>   
  );                     
  FriendList.propTypes = {  
    friends: PropTypes.array,
  };
export default FriendList;
  