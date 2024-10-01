import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-red-200 text-2xl font-bold flex justify-center items-center">
        Props with Tailwind
      </h1>

      <Card  imgUrl="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card username="Seena Yan" imgUrl= "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <Card username="Hakuya Yan" imgUrl="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </>
  );
}

export default App;
