import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import Manipallogo from '../assets/manipallogo.png'
import Image from 'next/image'
function Footer() {
  return (
    <div className=' mt-10 flex flex-col justify-between'>
        <div className={styles.footer} style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
        <div>
        <Image width={600} height={60} alt='' src={Manipallogo}/>
        </div>
        <div>
            <p className='mt-5'>Contact Us:</p>
            <p><FontAwesomeIcon className='text-[20px] mr-4' icon={faEnvelope}/> contact.falak@mitblrfest.in</p>
            <p><FontAwesomeIcon className='text-[20px] mr-4' icon={faPhone}/> 7619190143 , 949374178 (Cultural), 8310103276 (Sports)</p> 
        </div>
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.900128870748!2d77.5892597406864!3d13.124881456104033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae196682f2da33%3A0x358deab93bcf0b1f!2sMAHE-BLR!5e0!3m2!1sen!2sin!4v1668599822424!5m2!1sen!2sin" width="200"  loading="lazy"></iframe></div>
        </div>
        <p className='text-center text-white text-xl'>Made with ♥ <Link href={'https://www.linkedin.com/in/chandan-cv-3320441b4/'}>Chandan</Link> and <Link href={'https://www.linkedin.com/in/astitva-agarwal-9554b8204/'}>Astitva</Link></p>
        </div>
  )
}

export default Footer