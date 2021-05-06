import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance 1',
      amount: 31.83,
      date: new Date(2021, 1, 21),
    },
    {
      id: 'e2',
      title: 'Car Insurance 2',
      amount: 32.83,
      date: new Date(2021, 2, 22),
    },
    {
      id: 'e3',
      title: 'Car Insurance 3',
      amount: 33.83,
      date: new Date(2021, 3, 23),
    },
    {
      id: 'e4',
      title: 'Car Insurance 4',
      amount: 34.83,
      date: new Date(2021, 4, 24),
    },
    {
      id: 'e5',
      title: 'Car Insurance 5',
      amount: 35.83,
      date: new Date(2021, 5, 25),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
