import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  useEffect(() => {
    const saved = localStorage.getItem("qrdata");
    // const data = {
    //   partnername: "Shruti madhav",
    //   phonenumber: "1234",
    //   profile: "shruti.com",
    //   attend: "1"
    // }
  }, [])


  return (
    <section className="wrapperScan">
      <div className='logo'>
        {/* <h1>Welcome to UjustBe Universe</h1> */}
        <img src='/universary.svg' />
      </div>

      <div className='wrongURL'>
        <h2 className=''>
          Please Enter Valid URL
        </h2>
        <p>Reach out core team for help</p>
      </div>

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
