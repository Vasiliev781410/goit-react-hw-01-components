import PropTypes from 'prop-types';

const FriendListItem = ({friend}) =>{
    console.log(friend.isOnline);    
    return ( 
        <li className="item"> 
        {friend.isOnline === true ? <span className="status"></span> : <span className="statusOff"></span>}            
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
    );
}   

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,})
};

export default FriendListItem;
 