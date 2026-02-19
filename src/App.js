import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdInstallDesktop } from "react-icons/md";
import { useState } from 'react'
import './App.css'
import PlayStore from './components/PlayStore'

const storeData = [
  {
    id: 1,
    title: 'LinkedIn',
    image: 'https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj',
    ratings:'★★★★★'
  },
  {
    id: 2,
    title: 'Naukri',
    image: 'https://yt3.googleusercontent.com/O0mMM5E1ynLDCKCP125bREm2wNcFAaAAc10AUnTw4NlgJwhqNIHKOcthJ6nigWNL5I5FMokT6w=s900-c-k-c0x00ffffff-no-rj',
    ratings:'★★★★☆'
  },
  {
    id: 3,
    title: 'Glassdoor',
    image: 'https://play-lh.googleusercontent.com/FNk92EvS6pp9vcBKdEQFVxVuA7g5vXocGWS4zz1uVFkdBUYPExDbnw1Tet3jZA_kAg',
    ratings:'★★★★⯪'
  },
  {
    id: 4,
    title: 'Instagram',
    image: 'https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80',
    ratings:'★★★★★⯪'
  },
  {
    id: 5,
    title: 'Snapchat',
    image: 'https://e7.pngegg.com/pngimages/654/729/png-clipart-snapchat-social-media-snap-inc-app-store-dope-logo-text-smiley.png',
    ratings:'★★★★⯪'
  },
  {
    id: 6,
    title: 'WhatsApp',
    image: 'https://store-images.s-microsoft.com/image/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.7f3687b9-847d-4f86-bb5c-c73259e2b38e',
    ratings:'★★★★⯪'
  },
  {
    id: 7,
    title: 'Amazon',
    image: 'https://yt3.googleusercontent.com/cSVSA1S_y1HeAh1HLnFNZzO-1OwHAbJyW6wK8Y3XYWO5AOK8TuhpvZE1AX9EQz3P1I5DJ78bDQ=s900-c-k-c0x00ffffff-no-rj',
    ratings:'★★★★⯪'
  },
  {
    id: 8,
    title: 'Zomato',
    image: 'https://play-lh.googleusercontent.com/Zqv3j3gWCWrxuHW1VkRKNWso3beRsrwPCj58kG_Ile6iGGSf1YfkPYhKExXKY7_L0lU',
    ratings:'★★★★☆'
  },
  {
    id: 9,
    title: 'Swiggy',
    image: 'https://static.thearcweb.com/images/PROD/PROD-30ba90b6-0925-423a-9842-bc34b4469195.png',
    ratings:'★★★☆☆'
  },
  {
    id: 10,
    title: 'X',
    image: 'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80',
    ratings:'★★★★⯪'
  },
  {
    id: 11,
    title: 'TrueCaller',
    image: 'https://play-lh.googleusercontent.com/T9WgkoSUXy7wa3_oMRWt-kxsLVtgwMKoX4IdHRU_mF33MKudjAIn1ls-J2XHHo06-rY',
    ratings:'★★★★☆'
  },
  {
    id: 12,
    title: 'Spotify',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZGzTL011iyJZUnzy9T278kjLQmk9W0DMug&s',
    ratings:'★★★☆☆'
  },
  {
    id: 13,
    title: 'Vpn',
    image: 'https://store-images.s-microsoft.com/image/apps.335.13651171231415716.895236c5-4b53-471d-bad4-32ebf920e208.3bd7ec15-83a0-4343-9e86-a5142313c776',
    ratings:'★★★★★'
  },
  {
    id: 14,
    title: 'Subway Surfers',
    image: 'https://img.utdstc.com/icon/590/0ed/5900ed3c1d60b6f8e108a233d11cf94c3636ecef9687f571767ebf7b6e2b0b74:200',
    ratings:'★★★★★'
  },
]

const App = () =>{
  const[filterapp,setFilter] = useState("")
  const[delApp,setDelApp] = useState(storeData)
  const searchApp = (e) =>{
    setFilter(e.target.value)
  }
  const searchFilter = delApp.filter((app)=>
  app.title.toLowerCase().includes(filterapp.toLowerCase())
  )
  const deleteApp = (id) =>{
    setDelApp(delApp.filter((app)=>app.id !== id))
    window.alert(`App deleted successfully`)
  }
  return(
    <div>
      <div className='search-container'>
        <h1>Play Store</h1>
        <br/>
        <input type='search'
        placeholder='search app...'
        className='input-box'
        onChange={searchApp}
        value={filterapp} />
        <br/>
      </div>
      <div className='app-container'>
        {searchFilter.length>0 ? (searchFilter.map((apps)=>(
          <div className='app' key={apps.id}>
            <PlayStore storeData={apps}/>
            <div className='del-icon'>
              <RiDeleteBin6Fill  onClick={()=>deleteApp(apps.id)}/>
            </div>
            <div className="install-icon">
              <MdInstallDesktop />
            </div>
          </div>))):(<p><b>App Not Found</b></p>)
        }
      </div>
    </div>
  )
}
export default App