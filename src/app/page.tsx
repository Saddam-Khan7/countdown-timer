import CountdownTimer from './components/CountdownTimer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CountdownTimer />
    </div>
  );
};

export default Home;
