// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./Home.css"
// const Home = () => {
//     const [players, setPlayers] = useState([]);
//     const [header, setHeader] = useState([]);
//     const delhiPlayers = players.filter((item) => item.teamName === "Sunrisers Hyderabad"); 
//     const midIndex = Math.ceil(delhiPlayers.length / 2); // Find the midpoint
//     const firstHalf = delhiPlayers.slice(0, midIndex);  // First half for left side
//     const secondHalf = delhiPlayers.slice(midIndex);    // Second half for right side
//     console.log("firstHalf --, secondHalf--",firstHalf, secondHalf)
//     const nav = useNavigate();
    
//     useEffect(() => {
//         fetch("https://auction-titans-backend.onrender.com/players")
//             .then((res) => res.json())
//             .then((data) => {
//                 setPlayers(data.filter((item) => item.teamName === "Sunrisers Hyderabad"));
//     console.log("firstHalf --, secondHalf--",data.filter((item) => item.teamName === "Sunrisers Hyderabad"))
//     setHeader(Object.keys(data[0]));
//             });
//     }, []);

//     const handleNavigation = (e) => {
//         e.preventDefault();
//         nav("/AuctionPage")
//     }

//     return (
//         <div className="container">
//         <button className="auction-btn" onClick={(e) => handleNavigation(e)}>Go To Auction</button>
    
//         {/* Table Container with Two Sections */}
//         <div className="table-wrapper">
//             {/* Left Table (First Half) */}
//             <div className="table-section">
//                 <p className="heading">You can view your player details here</p>
//                 <div className="scroll-container">
//                     <table className="player-table">
//                         <thead>
//                             <tr>
//                                 {header
//                                     .filter((item) => item !== "_id")
//                                     .map((item, index) => <th key={index}>{item.toUpperCase()}</th>)}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {players.map((item, index) => (
//                                 <tr key={index}>
//                                     {header
//                                         .filter((head) => head !== "_id")
//                                         .map((head, headIndex) => <td key={headIndex}>{item[head]}</td>)}
//                                 </tr>
//                             ))} 
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
    
//             {/* Right Table (Second Half) */}
//             {/* <div className="table-section">
//                 <p className="heading">Remaining Players</p>
//                 <div className="scroll-container">
//                     <table className="player-table">
//                         <thead>
//                             <tr>
//                                 {header
//                                     .filter((item) => item !== "_id" && item !== "__v")
//                                     .map((item, index) => <th key={index}>{item.toUpperCase()}</th>)}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {secondHalf.map((item, index) => (
//                                 <tr key={index}>
//                                     {header
//                                         .filter((head) => head !== "_id" && head !== "__v")
//                                         .map((head, headIndex) => <td key={headIndex}>{item[head]}</td>)}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div> */}
//         </div>
//     </div>
    

//     );
// };

// export default Home;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    const [players, setPlayers] = useState([]);
    const [header, setHeader] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const playersPerPage = 8; // Display 8 players per page

    // Filter players based on the team
    const delhiPlayers = players.filter((item) => item.teamName === "Sunrisers Hyderabad");

    // Calculate index ranges for pagination
    const indexOfLastPlayer = currentPage * playersPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
    const currentPlayers = delhiPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);

    // Handle navigation between pages
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nav = useNavigate();
    
    useEffect(() => {
        fetch("https://auction-titans-backend.onrender.com/players")
            .then((res) => res.json())
            .then((data) => {
                setPlayers(data.filter((item) => item.teamName === "Sunrisers Hyderabad"));
                setHeader(Object.keys(data[0]));
            });
    }, []);

    const handleNavigation = (e) => {
        e.preventDefault();
        nav("/AuctionPage");
    };

    const totalPages = Math.ceil(delhiPlayers.length / playersPerPage);

    return (
        <div className="container">
            <button className="auction-btn" onClick={(e) => handleNavigation(e)}>Go To Auction</button>
        
            {/* Table Container with Two Sections */}
            <div className="table-wrapper">
                {/* Left Table (First Half) */}
                <div className="table-section">
                    <p className="heading">You can view your player details here</p>
                    <div className="table-container">
                        <table className="player-table">
                            <thead>
                                <tr>
                                    {header
                                        .filter((item) => item !== "_id")
                                        .map((item, index) => <th key={index}>{item.toUpperCase()}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {currentPlayers.map((item, index) => (
                                    <tr key={index}>
                                        {header
                                            .filter((head) => head !== "_id")
                                            .map((head, headIndex) => <td key={headIndex}>{item[head]}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button 
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}>
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => paginate(index + 1)} 
                        className={index + 1 === currentPage ? "active" : ""}>
                        {index + 1}
                    </button>
                ))}
                <button 
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;

