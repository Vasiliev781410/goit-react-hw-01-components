import PropTypes from 'prop-types';
import css from './FriendsList.module.css';


const FriendListItem = ({friend}) =>{   
    return ( 
        <li className={css.item}> 
        {friend.isOnline === true ? <span className={css.status}></span> : <span className={css.statusOff}></span>}            
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="125" />
            <p className={css.name}>{friend.name}</p>
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
 