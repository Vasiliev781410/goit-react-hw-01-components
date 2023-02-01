import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionItem = ({item}) =>{ 
    return ( 
    <tr className={css.transactionRow}>
        <td className={css.transactionColomnType}>{item.type}</td>
        <td className={css.transactionBorder}>{item.amount}</td>
        <td className={css.transactionBorder}>{item.currency}</td>
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
