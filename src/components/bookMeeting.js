import React from 'react'
import bookStyles from './bookMeeting.module.scss'


const BookMeeting =()=>{
    return(
        <div className={bookStyles.bookmeeting}>
            <h3>Book a Meeeting Now</h3>
            <p>Book Meeting with Assistant Professor of Computer Science, Aalto University</p>
            <button type="submit" className={bookStyles.bookButton} >Book Meeting</button> 
        </div>
    )
}
export default BookMeeting