// import './App.css';
import React,{useState} from 'react';
import Homepage from './components/Homepage/Homepage';
import Gamepage from './components/Gamepage/Gamepage';
import Scorepage from './components/Scorepage/Scorepage';
import './index.css';

function App() {
  // let players = [];
  const [page, setPage] = useState(0); 
  const [players, setPlayers] = useState([]);
  const [guest, setGuest] = useState();
  const [computer, setComputer]  = useState();
  const pageShow=()=>{
  if(page === 0 ) {
    //HomePage and function name (Maybe InitPlayer())
    return <Homepage nextCards = {shuffleCards} newPage={setPage} guestShow = {players} computer = {computer} guest = {guest}/> 
  }else if(page === 1) {
    //GamePage and players ids
    return <Gamepage guest = {guest} computer = {computer} nextPage = {setPage} shuffleCards = {shuffleCards}/>
  } else {
    return <Scorepage guest = {guest} computer = {computer} pageRestart = {setPage} shuffleCards = {shuffleCards}  guestShow = {players}
   
    />
  }
}

const shuffleCards =(name)=>{

  let fullDeck = new CardDeck();
  let guestDeck = [], computerDeck = [] ;
  for(let i = 0; i < 26; i++) {
    guestDeck.push(fullDeck.dealCard());
    computerDeck.push(fullDeck.dealCard());
  } 

  //cycle throw all players and checking if a player already have that name, 
  //if it founds one set this as the current playing player, otherwise create new player.
  let isPlayerAlreadyPlayed = false;
  for(let i = 0; i < players.length; i++){
    let currentPlayer = players[i];
    if(currentPlayer.name === name){
      isPlayerAlreadyPlayed = true;
      setGuest(currentPlayer);
      break;
    }
  }

  if(!isPlayerAlreadyPlayed){//only if player name IS NOT in the player list already
    const guest = new Guest(name, guestDeck); 
    setGuest(guest);
    setPlayers([guest]);
  }

  setComputer(new Guest('Computer', computerDeck)); 
  setPage(1); // setPage 1 is the GamePage, 0 is the HomePage and 2 is the ScorePage. 
  
}
  return (
    <div className="App">
     {pageShow()} 
    </div>
  );
}

export default App;
class Guest{
  constructor(name, cards){
    this.name = name; 
    this.cardArr = cards;
  }
  name=''; 
  games = 0 ; 
  win = 0; 
  lose = 0;
  cardArr = []; 
  lastGame = 0 ;  

}

class CardDeck{
  constructor(){
    // this.cards.push();
    this.isInitCards();
  }
  cards = []; 
  isInitCards(){
    //
    for(let i = 1; i < 14; i++) {
      for(let j = 0; j < 4; j++) {
        this.cards.push(i); // calling i to activate the loop.
      }
    }
  }
  dealCard(){
    let random = Math.floor(Math.random() * this.cards.length); // a random shuffle function for cards 
    let card = this.cards.splice(random, 1); // checking every single card by random.
    return card[0]; // starts from place 0 .
  }
}
