import { useState } from 'react'
import PageOne from '../Practice/PageOne'
import PageTwo from '../Practice/PageTwo'

const App = () => {

  const [queue, setQueue] = useState([]);

  const dataUpdated = (client) => {
    const id = Date.now();

    const newClient = {
      id,
      name: client.name,
      password: client.password,
      checked: client.checked
    };

    setQueue([
      ...queue,
      newClient
    ]);
     
    console.log('Queue state updated:', client, id);
  };

  const updateStatusData = (id, newStatus) => {
    setQueue(queue.map((client) => (client.id === id ? { ...client, checked: newStatus } : client)));
  }

  return (
    <div>

      <PageOne onDataAdded={dataUpdated} />
      <PageTwo queue={queue} updateStatus={updateStatusData} />
    </div>
  )
}

export default App
