import TransactionItem from "./TransactionItem.jsx";
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items,}) =>{
    let numb = 0;
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
                numb = numb + 1;              
                return (<TransactionItem key={transaction.id} item={transaction} number={numb}/>)})}
        </tbody>
    </table>   
  )};  
  
TransactionHistory.propTypes = {
    items: PropTypes.array, 
};

export default TransactionHistory;
  