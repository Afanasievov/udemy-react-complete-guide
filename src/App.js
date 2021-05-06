import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance 1',
      amount: 31.83,
      date: new Date(2021, 2, 21),
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
      date: new Date(2021, 2, 23),
    },
    {
      id: 'e4',
      title: 'Car Insurance 4',
      amount: 34.83,
      date: new Date(2021, 2, 24),
    },
    {
      id: 'e5',
      title: 'Car Insurance 5',
      amount: 35.83,
      date: new Date(2021, 2, 25),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </div>
  );
}

export default App;
