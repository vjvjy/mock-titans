import React, { useState, useEffect } from "react";
// import "./AuctionPage.css"; // Assuming CSS is in the same folder

const AuctionPage = () => {
  const [currentBid, setCurrentBid] = useState(2000000); // Starting bid in INR
  const [biddingTeam, setBiddingTeam] = useState("Team A");

  const [player, setPlayer] = useState(null);

  let randomPlayer;

  useEffect(() => {
    fetch("https://auction-titans-backend.onrender.com/players")
      .then((res) => res.json())
      .then((data) => {
        randomPlayer = Math.floor(Math.random() * data.length);
        console.log(randomPlayer, data[randomPlayer]);
        setPlayer(data[randomPlayer]);
      });
  }, []);


  return (
    <div className="auction-page">
      {/* Header Section */}
      <header className="header">
        {/* <img src="/ipl-logo.png" alt="IPL Logo" className="logo" /> */}
        <h1>IPL Mock - Auction 2025</h1>
      </header>

      {/* Main Auction Display Area */}
      <main>
        {/* Featured Player Panel */}
        <section className="player-panel">
          {/* <div className="player-info">
            <h2>{player?.name}</h2>
            <p>Role: {player?.role}</p>
            <p>Base Price: ₹2 Crore</p>
            <p>Current Bid: ₹{currentBid.toLocaleString()}</p>
            <p>Bidding Team: {biddingTeam}</p>
          </div> */}
          <div>
            {player ? (
                <div>
                    <h1>{player.name}</h1>
                    <p>{player.team}</p>
                    <p>{player.role}</p>
                </div>
            ) : (
                <p>Loading player...</p>
            )}
        </div>
        </section>

        {/* Bidding Panel */}
        <section className="bidding-panel">
          <button className="place-bid">Place Bid</button>
        </section>

        {/* Live Auction Feed */}
        <aside className="live-feed">
          <h3>Live Auction Feed</h3>
          <ul>
            <li>Team - Bid</li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default AuctionPage;
