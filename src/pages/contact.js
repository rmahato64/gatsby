import React from 'react'
import './contact.css'
import Head from '../components/head'
import Layout from '../components/layout'

const ContactPage =()=>{
    return (
        <div>
            <Layout className="layoutClass" >
            <Head title = "contact"/>
            <div>
                <h1>This is Contact page</h1>
                <p>My email address is abc@gmail.com</p>
                <p>This is ecternal link with anchor tag <a href="https://www.gatsbyjs.org/" target="_blank" >Click here</a></p>
            </div>
            <div class="form-style-8">
                    <h2>Contact Me</h2>
                    <form>
                        <input type="text" name="field1" placeholder="Full Name" />
                        <input type="email" name="field2" placeholder="Email" />
                        <textarea placeholder="Message" onkeyup="adjust_textarea(this)"></textarea>
                        <input type="button" value="Send" />
                    </form>
                </div>
            </Layout>

        </div>    
     
    )
}

export default ContactPage