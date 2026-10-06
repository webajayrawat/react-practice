import Link from "antd/es/typography/Link";

const App = () => {
  const data = [
    {
      user: {
        personal: {
          name: "Vibhuti Mishra",
          age: 28,
        },
        onclick: (e) => { e.target.style.color = "red"; },
        contact: {
          email: "vibhuti@example.com",
          phone: "9876543210",
        },
        company: {
          details: {
            name: "ABC Pvt Ltd",
            location: "UP",
          },
          job: {
            role: "Nalla",
            experience: 5,
          },
        },
      },
    },
    {
      user: {
        personal: {
          name: "David Mishra",
          age: 28,
        },
        onclick: (e) => { e.target.style.color = "red"; },
        contact: {
          email: "david@example.com",
          phone: "9876543210",
        },
        company: {
          details: {
            name: "ABC Pvt Ltd",
            location: "UP",
          },
          job: {
            type: "Nalla",
            saal: 5,
          },
        },
      },
    },
  ];

  return (
    <>
      <div>
        {data.map((item, index) => (
          <div className="user-card" key={index}>
            <h2>User {index + 1}</h2>
            <p>Name: {item.user.personal.name}</p>
            <p>Age: {item.user.personal.age}</p>
            <p>
              Email:{" "}
              <Link href={`mailto:${item.user.contact.email}`}>
                {item.user.contact.email}
              </Link>
            </p>
            <p>
              Phone:{" "}
              <Link href={`tel:${item.user.contact.phone}`}>
                {item.user.contact.phone}
              </Link>
            </p>
            <p>
              Location: {item.user.company.details.location}
            </p>
            <h3>Job Details</h3>
            {Object.entries(item.user.company.job).map(([key, value]) => (
              <p key={key}>
                {key}: {String(value)}
              </p>
            ))}
            <button onClick={item.user.onclick}>Click Me</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;