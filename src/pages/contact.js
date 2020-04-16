import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'

const ContactPage =()=>{
    return (
            <Layout>
                <Head title = "contact"/>
            <h1>This is Contact page</h1>
            <p>My email address is abc@gmail.com</p>
            <p>This is ecternal link with anchor tag <a href="https://www.gatsbyjs.org/" target="_blank" >Click here</a></p>
            </Layout>
     
    )
}

export default ContactPage