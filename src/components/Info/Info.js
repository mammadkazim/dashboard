import React from 'react'
import ticketIcon from "../../assets/ticket.png"
import xmarkIcon from "../../assets/x-mark-square.png"
import listIcon from "../../assets/list-icon.jpg"
import warningIcon from "../../assets/warning.png"
const Info = () => {
  return (
    <div className='grid-container'>
        <div className='grid-item'>
            <figure>
                <img alt='' src={ticketIcon}></img>
            </figure>
            <div className='right'>
                <div className='count'>1,426</div>
                <p>Tickets (YTD)</p>
            </div>
        </div>
        <div className='grid-item'>
            <figure>
                <img alt='' src={xmarkIcon}></img>
            </figure>
            <div className='right'>
                <div className='count'>25</div>
                <p>Overdue (YTD)</p>
            </div>
        </div>
        <div className='grid-item'>
            <figure style={{marginLeft:"2rem"}}>
                <img alt='' src={listIcon}></img>
            </figure>
            <div className='right'>
                <div className='count'>97</div>
                <p>Closed without action (YTD)</p>
            </div>
        </div>
        <div className='grid-item'>
            <figure>
                <img alt='' src={warningIcon}></img>
            </figure>
            <div className='right'>
                <div className='count'>896</div>
                <p>Escalated (YTD)</p>
            </div>
        </div>
    </div>
  )
}

export default Info