import React from 'react'
import './Contact.css'
import twitter from '../../assets/assets/twitter.svg'
import fb from '../../assets/assets/facebook.svg'
import insta from '../../assets/assets/insta.svg'

export default function 
() {
  return (
    <>
    <div className='center'>

        <div className='container'>
            <div className='head contact'>
                REACH US AT
            </div>
            <div className='start'>
            <div className='sContainer'>
                <div className='head'>
                    support@kicksup.com
                </div>
                <div className='desc'> 
                    for any technical support
                </div>
            </div>
            <div className='sContainer'>
                <div className='head'>
                    info@kicksup.com
                </div>
                <div className='desc'> 
                    for more information
                </div>
            </div>
            <div className='sContainer'>
                <div className='head'>
                    feedback@kicksup.com
                </div>
                <div className='desc'> 
                    to send your feedback
                </div>
            </div>
            <div className='sContainer'>
                <div className='head'>
                    jobs@kicksup.com
                </div>
                <div className='desc'> 
                    to work with us
                </div>
            </div>
            </div>

        </div>
        <div className='social'>
            <div className=''>
            stay in touch
            </div>
            <div className='svg'>
            <img src={twitter} alt="Logo"/>
            <img src={insta} alt="Logo"/>
            <img src={fb} alt="Logo"/>
            </div>
                
        </div>
    </div>
    </>
  )
}
