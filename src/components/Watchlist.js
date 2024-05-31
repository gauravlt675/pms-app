import React, { useState } from 'react';
import data from '../temp/data';
import '../styles/watchlist.css';

const Watchlist = () => {
  const [stocks, setStocks] = useState(data);
  const [query, setQuery] = useState("");
  const [myWatchList, setMyWatchList] = useState([]);

  const filteredStocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(query.toLowerCase()) ||
    stock.shortname.toLowerCase().includes(query.toLowerCase())
  );

  const addToWatchList = (stock) => {
    if (!myWatchList.some(item => item.shortname === stock.shortname)) {
      setMyWatchList([...myWatchList, stock]);
    }
  };

  return (
    <>
      <div>
        {myWatchList.length === 0 && (
          <div className="empty-watchlist-message">Your watchlist seems to be empty. Add some using the search bar!</div>
        )}
        {myWatchList.length > 0 && (
          <table className="stock-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Shortname</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myWatchList.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.shortname}</td>
                  <td>${stock.price.toFixed(2)}</td>
                  <td>
                    <button onClick={
                      () => setMyWatchList(myWatchList.filter(item => item.shortname !== stock.shortname))}>
                      Remove
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <label>
        Search:
        <input value={query} onChange={(e) => setQuery(e.target.value)} type='search' />
      </label>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Shortname</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {query !== "" && filteredStocks.length === 0 && (
            <tr>
              <td colSpan="4">No stocks with such name!</td>
            </tr>
          )}
          {query !== "" && filteredStocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.shortname}</td>
              <td>${stock.price.toFixed(2)}</td>
              <td>
                <button onClick={() => addToWatchList(stock)}>Add to Watchlist</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Watchlist;
