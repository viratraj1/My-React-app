



import React, { useReducer } from 'react'
import "./movie-ticket.css"


function Bookmyso() {
    const actionTypes={
        BOOK_TICKETS:"BOOK_TICKETS",
        CANCEL_TICKETS:" CANCEL_TICKETS",
        CHANGE_TOTAL_TICKETS:"CHANGE_TOTAL_TICKETS",
        CHANGE_MOVIE:"CHANGE_MOVIE"
    }
    const initialState={
        moveTheater:"pvr",
        location:"Lulu mall",
        movieName:"RRR",
        totalTickets:100,
        bookedTickets:26,
        currentAvailableTickets:74,
     
     }

const reducer=(state,action)=>{

switch(action.type){
    case actionTypes.BOOK_TICKETS:
        return{...state,bookedTickets:state.bookedTickets+action.payload,currentAvailableTickets:state.currentAvailableTickets - action.payload};


      case actionTypes.CANCEL_TICKETS:
        return{...state,bookedTickets:state.bookedTickets - action.payload,currentAvailableTickets:state.totalTickets - action.payload};

         case actionTypes.CHANGE_TOTAL_TICKETS:
            return{...state, totalTickets:state.totalTickets + action.payload};

            case actionTypes.CHANGE_MOVIE:
                return {...state,movieName:action.payload}

}
       


}




const [currentState,dispatchFunction]=useReducer(reducer,initialState)

const bookTicketHandler=()=>{
    dispatchFunction({
        type:actionTypes.BOOK_TICKETS,
        payload:10,
    })
}
const cancelTicketHandler=()=>{
  dispatchFunction({
    type:actionTypes.CANCEL_TICKETS,
    payload:2
  })
}
const movieChangeHandler=()=>{
  dispatchFunction({
    type:actionTypes.CHANGE_MOVIE,
    payload:"OG",
  })
}
  return (
    <div className='bkimg'>
          
           <img src='https://wallpapercave.com/wp/wp6269580.jpg' className='imgir'/> 
       
        <h1 className='solight'>BOOK MY SO</h1>
      
    <div className='movieticket'>
                
                <h4>number of Total Tickets : {currentState.totalTickets}</h4>
                <h4>number of Ticket : {currentState.currentAvailableTickets}</h4>
                <button onClick={bookTicketHandler}>Book tickets</button>
                <button onClick={cancelTicketHandler}>Cancel tickets</button>
                <h4>moveName : {currentState.movieName}</h4>
                <button onClick={movieChangeHandler}>move Change</button>
    </div>
    </div>
  )
}

export default Bookmyso;


