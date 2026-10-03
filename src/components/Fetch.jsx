import React from 'react';

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
        <div>
          {[...new Set(data.map((item) => item.userId))].map((userId) => (
            <div key={userId}>
              <button
                type="button"
                onClick={() => setSelectedUserId(selectedUserId === userId ? null : userId)}
              >
                {userId}
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
    );
}

export default Fetch;
