import driverData from '../data/drivers.json';

const DriverList = ({ searchQuery }) => {
  const calculateTotalMinutes = (activities) =>
    activities.reduce((total, { duration }) => total + duration, 0);

  const hasActivityForDay = (traces, day) =>
    traces.some(trace => new Date(trace.date).getDay() === day);

  const filteredDrivers = driverData.data.filter(driver => 
    driver.forename.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.vehicleRegistration.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 w-full">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2">Driver Name</th>
            <th className="px-4 py-2">Vehicle Reg</th>
            <th className="px-4 py-2">Total Activity Duration</th>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <th className="px-4 py-2" key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map(driver => (
            <tr key={driver.driverID}>
              <td className="border px-4 py-2">
                {`${driver.forename} ${driver.surname}`}
              </td>
              <td className="border px-4 py-2">{driver.vehicleRegistration}</td>
              <td className="border px-4 py-2">
                {calculateTotalMinutes(driver.traces[0].activity)} mins
              </td>
              {[1, 2, 3, 4, 5, 6, 0].map(day => (
                <td className="border px-4 py-2 text-center" key={day}>
                  {hasActivityForDay(driver.traces, day) ? (
                    <div className="bg-green-500 w-4 h-4"></div>
                  ) : (
                    <div className="w-4 h-4"></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;
