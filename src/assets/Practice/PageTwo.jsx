
const PageTwo = ({ queue, updateStatus }) => {

    return (
        <div className="queue-form-card">
            {queue.map((client) => (
                <div className="queue-item" key={client.id}>
                    <p>Name: {client.name}</p>
                    <p>Password: {client.password}</p>
                    <p>Remember Me: {client.checked ? 'Yes' : 'No'}</p>
                    <button onClick={() => updateStatus(client.id, !client.checked)}
                    >Update Status</button>
                </div>
            ))}
        </div>
    )
}

export default PageTwo
