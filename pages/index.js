import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import { useState } from 'react/cjs/react.production.min'


export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [mobilenum, setMobilenum] = useState("");
  useEffect(() => {
    const saved = localStorage.getItem("qrdata");
    
    // const data = {
    //   partnername: "Shruti madhav",
    //   phonenumber: "1234",
    //   profile: "shruti.com",
    //   attend: "1"

    // }
    // axios.put('http://15.206.163.60/api/1234', data).then(response => {
    //   console.log(response);
    // });

    // return () => {
    //   second
    // }
  }, [])


  useEffect(() => {
    const saved = localStorage.getItem("qrdata");
    const mobilenum = JSON.parse(saved)
    console.log(saved);
    console.log(mobilenum.phonenumber);
    setMobilenum(mobilenum.phonenumber)
    if (saved) {
      console.log("true");
      setIsLogin(true);
    } else {
      console.log("false");
      setIsLogin(false);


    }

  }, [])


  return (
    <section className="wrapperScan">



      <div className='logo'>
        {/* <h1>Welcome to UjustBe Universe</h1> */}
        <img src='/universary.svg' />
      </div>
      {isLogin ?<div className='welcommsg'>
          <h1>Welcome to UjustBe Unniverse</h1>
          <div className='agenda'>
            <h3>Get ready to celebrate into</h3>
            <ul>
              <li>UJustBe : A world of Happy Faces</li>
              <li>Meet the Winners : Performers of the Year</li>
              <li>UJustBe Universe: A Space of Infinite Possibilities</li>
              <li>Access the Core</li>
              <li>Explore the Nucleus</li>
              {/* <li>•	Link to have access for Relationship Bootcamp</li>
            <li>•	Link to have access for Health Bootcamp</li>
            <li>•	Link to have access for Wealth Bootcamp</li> */}
            </ul>

          </div>
          <p className='msg2'>Everything begins with a relationship.<br/>
            Scan to Connect</p>
          <Link href={"/scan/" + mobilenum}>
            <a className='scanBtn'>Scan</a></Link>
          {/* <button ></button> */}
        </div> : <div className='wrongURL'>
          <h2 className=''>
            Please Enter Valid URL
          </h2>
          <p>Reach out core team for help</p>
          </div>}


      <div className='social-icon'>
        <ul>
          <li>
            <Link href="/blog/hello-world">
              <a>
                <img src='/icon-fb.png' />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a><img src='/icon-ints.png' /></a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
