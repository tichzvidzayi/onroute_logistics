import driverData from '../data/drivers.json';

const DriverList = ({ searchQuery }) => {
  // Helper function to calculate activity totals by type
  const calculateTotalsByType = (activities) => {
    const totals = {
      drive: 0,
      rest: 0,
      work: 0,
      available: 0,
    };

    activities?.forEach(({ type, duration }) => {
      if (totals[type] !== undefined) {
        totals[type] += duration;
      }
    });

    return totals;
  };

  // Helper function to check if there is activity for a specific day
  const hasActivityForDay = (traces, day) => 
    traces ? traces.some(trace => new Date(trace.date).getDay() === day && trace.activity.length > 0) : false;

  // Filter drivers based on the search query
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
            <th className="px-4 py-2">Total Drive</th>
            <th className="px-4 py-2">Total Rest</th>
            <th className="px-4 py-2">Total Work</th>
            <th className="px-4 py-2">Total Available</th>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <th className="px-4 py-2" key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map(driver => {
            const traces = driver.traces || [];
            const totalsByType = traces.length > 0 ? calculateTotalsByType(traces[0].activity) : {};

            return (
              <tr key={driver.driverID}>
                <td className="border px-4 py-2">
                  {`${driver.forename} ${driver.surname}`}
                </td>
                <td className="border px-4 py-2">{driver.vehicleRegistration}</td>
                <td className="border px-4 py-2">{totalsByType.drive || 0} mins</td>
                <td className="border px-4 py-2">{totalsByType.rest || 0} mins</td>
                <td className="border px-4 py-2">{totalsByType.work || 0} mins</td>
                <td className="border px-4 py-2">{totalsByType.available || 0} mins</td>
                {[1, 2, 3, 4, 5, 6, 0].map(day => (
                  <td className="border px-4 py-2 text-center" key={day}>
                    {hasActivityForDay(traces, day) ? (
                      <div className="bg-green-500 w-4 h-4"></div>
                    ) : (
                      <div className="w-4 h-4"></div>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DriverList;
