import TransactionItem from "./TransactionItem.jsx";
import PropTypes from 'prop-types';

const TransactionHistory = ({items,}) =>(
    <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>   
            {items.map(transaction => (<TransactionItem key={transaction.id} item={transaction}/>))}
        </tbody>
    </table>   
  );                     

  TransactionHistory.propTypes = {
    items: PropTypes.array,
};
export default TransactionHistory;
  