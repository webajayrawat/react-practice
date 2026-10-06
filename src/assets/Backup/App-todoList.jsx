import { useEffect, useState } from 'react';
// import CardsProps from './assets/Components/CardsProps'
// import Map from './assets/Components/Map'
// import Header from './assets/Components/Header'
// import QuequeForm from './assets/Components/QuequeForm'
import FormComponent from '../Components/FormComponent'
import FormComponentData from '../Components/FormComponentData';
function App() {
  // Load queue from localStorage when the app starts
  const [queue, setQueue] = useState(() => {
    const savedQueue = localStorage.getItem("queue");

    return savedQueue ? JSON.parse(savedQueue) : [];
  });

  // Save queue to localStorage whenever queue changes
  useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(queue));
  }, [queue]);


  const addToQueue = (customer) => {
    setQueue([...queue, {
      id: queue.length + 1,
      status: "pending",
      name: customer.name,
      service: customer.service
    }]);
    console.log(customer);
  }
  const updateStatus = (id, newStatus) => {
    setQueue(queue.map((customer) => (customer.id === id ? { ...customer, status: newStatus } : customer)));
  }
  const RemoveFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  }
  return (

    <>

      <div>
        <h1>Queue App</h1>
        <FormComponent onAdd={addToQueue} />
        <FormComponentData queue={queue} onUpdateStatus={updateStatus} onRemoveFromQueue={RemoveFromQueue} />
        {/* <QuequeForm onAddToQueue={addToQueue} /> */}
      </div>
      {/* <Header />

      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-4xl font-bold uppercase text-center">Learn to integrate Tailwind CSS</h1>
        <div className="flex gap-4 flex-wrap flex justify-center items-center">
          <CardsProps id={1} heading="Card Title One" src="https://flowbite.com/docs/images/blog/image-1.jpg" content="This is the content of the card." button="Click Me" />
          <CardsProps id={2} heading="Card Title Two" src="https://flowbite.com/docs/images/blog/image-2.jpg" content="This is the content of the card." button="Read More" />
        </div>
      </div> */}
      {/* <Map /> */}
    </>
  )
}

export default App
