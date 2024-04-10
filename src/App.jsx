import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100');
        const jsonData = await res.json();
        setData(jsonData.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
console.log(data);
  return (
    <div className="container mx-auto">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">City Name</th>
            <th className="px-4 py-2">Country</th>
            <th className="px-4 py-2">Population</th>
            <th className="px-4 py-2">Time Zone</th>
            <th className="px-4 py-2">Lat</th>
            <th className="px-4 py-2">Lon</th>
          </tr>
        </thead>
        <tbody>
          {data.map((city, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{city.ascii_name}</td>
              <td className="border px-4 py-2">{city.country}</td>
              <td className="border px-4 py-2">{city.population}</td>
              <td className="border px-4 py-2">{city.timezone}</td>
              <td className="border px-4 py-2">{city.coordinates.lat}</td>
              <td className="border px-4 py-2">{city.coordinates.lon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
