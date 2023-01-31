import PropTypes from 'prop-types';

const TransactionItem = ({item}) =>{    
    return ( 
    <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
    </tr>      
    );
}   

TransactionItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,})
};

export default TransactionItem;
