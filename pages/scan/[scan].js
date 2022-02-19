import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import QRCode from 'qrcode'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router'
// import QrReader from 'react-qr-reader';
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from 'react';
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function Scan({ eventsName }) {

  console.log("EventsName:", eventsName.scan);

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const [userDetails, setuserDetails] = useState([]);

  // const classes = useStyles();
  const qrRef = useRef(null);
  const [id, setId] = useState();
  const [Attend, setAttend] = useState();
  const [Bootcamp1, setBootcamp1] = useState(false);
  const [Bootcamp2, setBootcamp2] = useState(false);
  const [Bootcamp3, setBootcamp3] = useState();
  const [Bootcamp4, setBootcamp4] = useState();
  const [Designation, setDesignation] = useState();
  const [Dinner, setDinner] = useState();
  const [Phonenumber, setPhonenumber] = useState();
  const [ProfileUrl, setProfileUrl] = useState();
  const [first, setfirst] = useState();
  const [loginsuccess, setLoginsuccess] = useState(false);
  const [qrscan, setQrscan] = useState(false);
  const [alldata, setAllData] = useState({});

  const router = useRouter()

  // const [first, setfirst] = useState()

  // let {idname} = useParams()

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    const saved = localStorage.getItem("qrdata");
    console.log(result);
    if (result) {
      const text2 = result.replace(/ /g, '');
      // console.log(JSON.string(text2));
      const result2 = JSON.parse(text2);
      const result3 = JSON.stringify(result2)
      console.log("scann", result2.Type);

      // console.log(result);
      if (saved) {

        console.log("All ready Login");
        if (result2.Type === "attend") {
          console.log("allready Login attend",);
          setLoginsuccess(true);
          // setLoginsuccess(false)
            setQrscan(true)
          // router.push("/")
          setTimeout(() => { router.push("/"); }, 2000);

        }

        if (result2.Type === "Bootcamp3") {
          if (alldata.Bootcamp3 === "0") {
            const data = {
              partnername: alldata.partnername,
              phonenumber: alldata.phonenumber,
              profile: alldata.profile,
              Bootcamp3: "1"

            }
            axios.put('http://universaryapi.ujustbe.com/api/' + alldata.phonenumber, data).then(response => {
              console.log(response);
              const alldata = response.data;
              // localStorage.setItem('qrdata', JSON.stringify(response.data));
              setAllData(alldata);
            });
          }
          else {

          }
        }

        if (result2.Type === "Bootcamp1") {

          console.log("in boot camp 1", result2.Type);
          if (alldata.Bootcamp1 === "0") {
            const data = {
              partnername: alldata.partnername,
              phonenumber: alldata.phonenumber,
              profile: alldata.profile,
              Bootcamp1: "1"

            }
            axios.put('http://universaryapi.ujustbe.com/api/' + alldata.phonenumber, data).then(response => {
              console.log(response);
              const alldata = response.data;
             // localStorage.setItem('qrdata', JSON.stringify(response.data));
              setAllData(alldata);
              setBootcamp1(true);
            });
          }
          else {
            console.log("bootcamp1 true");
            setBootcamp1(true);
            setLoginsuccess(false)
            setQrscan(true)
          }
        }
        if (result2.Type === "Bootcamp2") {

          console.log("in boot camp 1", result2.Type);
          if (alldata.Bootcamp2 === "0") {
            const data = {
              partnername: alldata.partnername,
              phonenumber: alldata.phonenumber,
              profile: alldata.profile,
              Bootcamp2: "1"

            }
            axios.put('http://universaryapi.ujustbe.com/api/' + alldata.phonenumber, data).then(response => {
              console.log(response);
              const alldata = response.data;
             // localStorage.setItem('qrdata', JSON.stringify(response.data));
              setAllData(alldata);
              setBootcamp2(true);
            });
          }
          else {
            console.log("bootcamp1 true");
            setBootcamp2(true);
            setLoginsuccess(false)
            setQrscan(true)
          }
        }
        if (result2.Type === "Bootcamp3") {

          console.log("in boot camp 3", result2.Type);
          if (alldata.Bootcamp2 === "0") {
            const data = {
              partnername: alldata.partnername,
              phonenumber: alldata.phonenumber,
              profile: alldata.profile,
              Bootcamp3: "1"

            }
            axios.put('http://universaryapi.ujustbe.com/api/' + alldata.phonenumber, data).then(response => {
              console.log(response);
              const alldata = response.data;
             // localStorage.setItem('qrdata', JSON.stringify(response.data));
              setAllData(alldata);
              setBootcamp3(true);
            });
          }
          else {
            console.log("bootcamp1 true");
            setBootcamp3(true);
            setLoginsuccess(false)
            setQrscan(true)
          }
        }



      } else {
        console.log("Not Login yet");
        console.log("all userData", alldata.attend);
        // localStorage.setItem('qrdata', result3);


        // console.log(result2.attend);
        if (result2.Type === "attend") {
          if (alldata.attend === "0") {
            console.log("false");
            const data = {
              partnername: alldata.partnername,
              phonenumber: alldata.phonenumber,
              profile: alldata.profile,
              attend: "1"

            }
            axios.put('http://universaryapi.ujustbe.com/api/' + alldata.phonenumber, data).then(response => {
              console.log(response);
              const resultalldata = response.data;
              localStorage.setItem('qrdata', JSON.stringify(resultalldata));
              setAllData(resultalldata);
            });
          }
          else {
            console.log("Attendance true");
            setQrscan(true);
            setLoginsuccess(true)
            setTimeout(() => { router.push("/"); }, 5000);


          }
        }
      }
      // setScanResultWebCam(result);
    }
  }


  const handleErrorFile = (error) => {
    console.log(error);
  }

  // const onScanFile = () => {
  //   qrRef.current.openImageDialog();
  // }
  // const handleErrorWebCam = (error) => {
  //   console.log(error);
  // }

  useEffect(() => {
    axios.get('http://universaryapi.ujustbe.com/api/' + eventsName.scan)
      .then(res => {
        console.log(res.data);
        const persons = res.data;
        setAllData(persons);
      }).catch(err => {
        console.log(err);
        router.push("/");
      });
  }, [])



  return (
    <section className="wrapperScan">



      <div className='logo'>
        <img src='/universary.svg' />
      </div>
      <div className='QrcodeContainer'>
        {loginsuccess ? <div className='congrats'>
          <h2>Congratulations <span>{alldata.partnername}</span></h2>
          <p>You are entering in the <span>Space of Infinite Possibilities</span></p>

        </div> : null
        }
        {
          qrscan ? null : <>
            <QrReader
              delay={300}
              style={{ width: '100%' }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
            <h2>Scan here<span>to take a Quantum leap</span></h2>
          </>
        }
        {Bootcamp1 ? <div className='congrats'>
          <h2>Congratulations <span>{alldata.partnername}</span></h2>
          <p>Now you are charged to build connections</p>
          <ul>
            <li><Link href="/">
              <a>Go back to Home</a>
            </Link></li>
            <li><button  className='scanBtn'>Scan again</button></li>
          </ul>

        </div> : null
        }
        {Bootcamp2 ? <div className='congrats'>
          <h2>Wow... <span>{alldata.partnername}</span></h2>
          <p>You are one of very few who has courage to be naturally healthy</p>
          <ul>
            <li><Link href="/">
              <a>Go back to Home</a>
            </Link></li>
            <li><button  className='scanBtn'>Scan again</button></li>
          </ul>

        </div> : null
        }
        {Bootcamp3 ? <div className='congrats'>
          <h2>Wooosh… <span>{alldata.partnername}</span></h2>
          <p>Get ready to get explore the ways for wealth-generation</p>
          <ul>
            <li><Link href="/">
              <a>Go back to Home</a>
            </Link></li>
            <li><button  className='scanBtn'>Scan again</button></li>
          </ul>

        </div> : null
        }

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
export async function getServerSideProps({ query }) {
  console.log("query", query.id);
  return {
    props: {

      eventsName: query
    }
  }
}