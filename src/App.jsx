import { Container } from './styleConfig/App.styled';
import { UserProfile } from './components/userprofile/UserProfile';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friendlist/FriendList';
import data from './data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { TransactionHistory } from './components/transaction/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <UserProfile
        avatar={UserProfile.avatar}
        username={UserProfile.username}
        tag={UserProfile.tag}
        location={UserProfile.location}
        stats={UserProfile.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory itransactions={transactions} />
    </Container>
  );
};
