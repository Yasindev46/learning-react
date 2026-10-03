import React from 'react';
import { Link } from 'react-router-dom'

const Fetch = () => {
    const [data, setData] = React.useState([]);
  const [selectedUserId, setSelectedUserId] = React.useState(null);
    const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <div className="fetch-container" style={{ padding: '20px' }}>
            <h1>Fetch Page</h1>
            <Link to="/"><button className="home-button">Home</button></Link>
            <h2>Posts</h2>
           <div div style={{ display: 'flex',flexDirection: 'column', alignItems: 'flex-start' }}>
          {[...new Set(data.map((item) => item.userId))].map((userId) => (
            <div key={userId} style={{ marginBottom: '10px' }}>
              <button
                type="button"
                onClick={() => setSelectedUserId(selectedUserId === userId ? null : userId)}
                style={{
                  backgroundColor: selectedUserId === userId ? 'yellow' : 'lightgray',
                  margin: '5px',padding: '5px 10px',border: '1px solid black',borderRadius: '5px',cursor: 'pointer'}}
              >
                Post {userId}
              </button>
              {selectedUserId === userId && (
                <div>
                  {data
                    .filter((item) => item.userId === userId)
                    .map((item) => (
                      <article key={item.id}>
                        <h3>{item.id}</h3>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </article>
                    ))}
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
    );
}

export default Fetch;
