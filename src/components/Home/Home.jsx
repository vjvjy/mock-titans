import { useState, useEffect } from 'react';
import "./Home.css"
const Home = () => {
    const [players, setPlayers] = useState([]);
    const [header, setHeader] = useState([]);
    const delhiPlayers = players.filter((item) => item.team === "Delhi Capitals"); 
    const midIndex = Math.ceil(delhiPlayers.length / 2); // Find the midpoint
    const firstHalf = delhiPlayers.slice(0, midIndex);  // First half for left side
    const secondHalf = delhiPlayers.slice(midIndex);    // Second half for right side
    
    useEffect(() => {
        fetch("http://localhost:3000/players")
            .then((res) => res.json())
            .then((data) => {
                setPlayers(data);
                setHeader(Object.keys(data[0]));
            });
    }, []);

    return (
        <div className="container">
        {/* Go To Auction button at top-left */}
        <button className="auction-btn">Go To Auction</button>
    
        {/* Table Container with Two Sections */}
        <div className="table-wrapper">
            {/* Left Table (First Half) */}
            <div className="table-section">
                <p className="heading">You can view your player details here</p>
                <div className="scroll-container">
                    <table className="player-table">
                        <thead>
                            <tr>
                                {header
                                    .filter((item) => item !== "_id" && item !== "__v")
                                    .map((item, index) => <th key={index}>{item.toUpperCase()}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {firstHalf.map((item, index) => (
                                <tr key={index}>
                                    {header
                                        .filter((head) => head !== "_id" && head !== "__v")
                                        .map((head, headIndex) => <td key={headIndex}>{item[head]}</td>)}
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            </div>
    
            {/* Right Table (Second Half) */}
            <div className="table-section">
                <p className="heading">Remaining Players</p>
                <div className="scroll-container">
                    <table className="player-table">
                        <thead>
                            <tr>
                                {header
                                    .filter((item) => item !== "_id" && item !== "__v")
                                    .map((item, index) => <th key={index}>{item.toUpperCase()}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {secondHalf.map((item, index) => (
                                <tr key={index}>
                                    {header
                                        .filter((head) => head !== "_id" && head !== "__v")
                                        .map((head, headIndex) => <td key={headIndex}>{item[head]}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    

    );
};

export default Home;
