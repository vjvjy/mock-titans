import React, { useState } from "react";
// import "./AuctionPage.css"; // Assuming CSS is in the same folder

const AuctionPage = () => {
  const [currentBid, setCurrentBid] = useState(2000000); // Starting bid in INR
  const [biddingTeam, setBiddingTeam] = useState("Team A");

  const increaseBid = (amount) => {
    setCurrentBid((prev) => prev + amount);
    setBiddingTeam("Team B"); // Example logic to switch teams
  };

  return (
    <div className="auction-page">
      {/* Header Section */}
      <header className="header">
        <img src="/ipl-logo.png" alt="IPL Logo" className="logo" />
        <h1>IPL Auction 2025</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Teams</li>
            <li>Players</li>
            <li>Live Auction</li>
            <li>Leaderboard</li>
          </ul>
        </nav>
        <input type="text" placeholder="Search Players" className="search-bar" />
      </header>

      {/* Main Auction Display Area */}
      <main>
        {/* Featured Player Panel */}
        <section className="player-panel">
          <img
            src="/player-image.jpg"
            alt="Featured Player"
            className="player-image"
          />
          <div className="player-info">
            <h2>Virat Kohli</h2>
            <p>Role: Batsman</p>
            <p>Base Price: ₹2 Crore</p>
            <p>Current Bid: ₹{currentBid.toLocaleString()}</p>
            <p>Bidding Team: {biddingTeam}</p>
          </div>
        </section>

        {/* Bidding Panel */}
        <section className="bidding-panel">
          <button onClick={() => increaseBid(1000000)}>+ ₹10L</button>
          <button onClick={() => increaseBid(5000000)}>+ ₹50L</button>
          <button onClick={() => increaseBid(10000000)}>+ ₹1 Crore</button>
          <button className="place-bid">Place Bid</button>
        </section>

        {/* Live Auction Feed */}
        <aside className="live-feed">
          <h3>Live Auction Feed</h3>
          <ul>
            <li>Team A bid ₹2 Crore for Virat Kohli</li>
            <li>Team B bid ₹2.5 Crore for Virat Kohli</li>
          </ul>
        </aside>

        {/* Teams & Budget Overview */}
        <aside className="team-overview">
          <h3>Teams & Budget</h3>
          <ul>
            <li>Team A: ₹50 Crore</li>
            <li>Team B: ₹45 Crore</li>
            <li>Team C: ₹48 Crore</li>
          </ul>
        </aside>
      </main>

      {/* Footer Section */}
      <footer>
        <p>© IPL Auction 2025 | Follow us on:</p>
        <div className="social-links">
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
        <div className="sponsors">
          <p>Sponsored by:</p>
          <img src="/sponsor1.png" alt="Sponsor 1" />
          <img src="/sponsor2.png" alt="Sponsor 2" />
        </div>
      </footer>
    </div>
  );
};

export default AuctionPage;
