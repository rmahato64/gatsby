import React from 'react'
import Header from './header'
import Footer from './footer'
import BookMeeting from './bookMeeting'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import ShareButtons from './sharebutton'


const Layout = (props)=>{
    return (
        <div className={layoutStyles.container} >
            <div className={layoutStyles.content} >
            <Header />
            {props.children}
            </div>
            <BookMeeting />

            <Footer />

        </div>
    )
}
export default Layout