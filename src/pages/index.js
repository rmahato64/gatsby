import React from 'react'
import {Link} from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const IndedPage =()=>{
    return (
        <Layout>
            <Head  />
            <h1>Hello All</h1>
            <h2>I am Rakesh a junior developer.</h2>
            <p>Need Developer <Link to="/contact" >Contact Me</Link> </p>
            
        </Layout>
    )
}
export default IndedPage
