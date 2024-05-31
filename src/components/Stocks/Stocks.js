import React, { useState, useEffect } from 'react';
import './Stocks.css'; // Import a separate CSS file for styles

let initialData = [
    { name: "Apple", currentPrice: 14.99, costPrice: 15.50, booked: true },
    { name: "Microsoft", currentPrice: 39.99, costPrice: 28.75, booked: false },
    { name: "Tesla", currentPrice: 19.99, costPrice: 12.45, booked: true },
    { name: "Netflix", currentPrice: 25.33, costPrice: 35.20, booked: false },
    { name: "Amazon", currentPrice: 20.99, costPrice: 21.30, booked: true }
];

const Stocks = () => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        // Sort the data array to display objects with booked value true below false initially
        const sortedData = [...data].sort((a, b) => (a.booked === b.booked) ? 0 : a.booked ? 1 : -1);
        setData(sortedData);
    }, []); // Empty dependency array ensures that this effect runs only once on mount

    const handleToggleBooked = (index) => {
        const newData = [...data];
        const selectedStock = newData[index];

        if (selectedStock.booked) {
            // If going from true to false, prompt for confirmation
            const confirmed = window.confirm(`Are you sure you want to unbook ${selectedStock.name}?`);
            if (!confirmed) {
                return; // If not confirmed, do nothing
            }
        }

        // Toggle the booked value
        selectedStock.booked = !selectedStock.booked;

        // Sort the data array to display objects with booked value true below false
        const sortedData = [...newData].sort((a, b) => (a.booked === b.booked) ? 0 : a.booked ? 1 : -1);

        // Update the state with the modified and sorted data
        setData(sortedData);
    };

    return (
        <div className="stocks-table">
            <table>
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>LTB</th>
                        <th>Bought For</th>
                        <th>Status</th>
                        <th>Net Change</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ name, currentPrice, costPrice, booked }, index) => (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>${currentPrice.toFixed(2)}</td>
                            <td>${costPrice.toFixed(2)}</td>
                            <td className={booked ? 'booked' : 'active'}>{booked ? 'Booked' : 'Active'}</td>
                            <td className={costPrice <= currentPrice ? 'profit' : 'loss'}>{(costPrice - currentPrice).toFixed(2)}</td>
                            <td>
                                <button onClick={() => handleToggleBooked(index)}>
                                    Toggle Booked
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Stocks;
