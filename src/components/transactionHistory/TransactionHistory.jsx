import TransactionItem from "./TransactionItem.jsx";
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items,}) =>{
    return (<table className={css.transactionHistory}>
        <thead className={css.transactionHeader}>
            <tr>
                <th className={css.transactionBorder}>Type</th>
                <th className={css.transactionBorder}>Amount</th>
                <th className={css.transactionBorder}>Currency</th>
            </tr>
        </thead>

        <tbody>   
            {items.map(transaction =>{                            
                return (<TransactionItem key={transaction.id} item={transaction}/>)})}
        </tbody>
    </table>   
  )};  
  
TransactionHistory.propTypes = {
    items: PropTypes.array, 
};

export default TransactionHistory;
  