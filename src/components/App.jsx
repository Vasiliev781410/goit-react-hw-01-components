import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';
import Statistics  from './statistic/Statistics.jsx';
import data from './statistic/data.json';
import FriendList  from './friendList/FriendList.jsx';
import friends from './friendList/friends.json';
import TransactionHistory  from './transactionHistory/TransactionHistory.jsx';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',        
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <p></p> 
      <Statistics title="Upload stats" stats={data}/>
      <p></p>
      <FriendList friends={friends}/>
      <p></p>
      <TransactionHistory items={transactions} />;      
    </div>
  );
};
