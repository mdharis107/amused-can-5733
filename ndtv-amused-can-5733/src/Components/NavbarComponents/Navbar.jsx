import { Link } from "react-router-dom"
import styles from "../NavbarComponents/navbar.module.css"
import { GoKebabHorizontal } from "react-icons/go"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import { BsSmartwatch } from "react-icons/bs"
import { ImSearch } from "react-icons/im"
import { BsBellFill } from "react-icons/bs"
import { useState } from "react"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
    Portal,
    Input,
  } from '@chakra-ui/react'
// import'https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap'


// // GoKebabHorizontal
// BsTwitter
// FaFacebookSquare
// BsSmartwatch
// ImSearch
// IoNotificationsSharp

export default function NavbarPage(){
    const [show,setShow] = useState(false)
    // const [search,setSearch] = useState(false)
    
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar_first_box} >
                <div >
                    <Link className={styles.Link} style={{color:"#c6c6c6"}}  to="/">
                        NDTV
                    </Link>
                </div> 
                <div>हिंदी न्यूज़</div>
                <div>BUISNESS</div>
                <div>MOVIES</div>
                <div>CRICKET</div>
                <div>TECH</div>
                <div>FOOD</div>
                <div>CRYPTO</div>
                <div>WEB STORIES</div>
                <div>EDUCATION</div>
                <div>AUTO</div>
                <div>SWASTH</div>
                <div>LIFESTYLE</div>
                <div>HEALTH</div>
                <div>SHOPPING</div>
                <div>ART</div>
            </div>
            <div className={styles.second_box}>
                <div id={styles.home_logo}>
                    <Link to="/">
                        <img src="https://drop.ndtv.com/homepage/images/ndtvlogo22.svg" alt="" />
                    </Link>
                </div>
                
                <div >
                    <Link className={styles.Link} to="/latest">
                        LATEST
                    </Link>
                </div>
                <div>
                    LIVE TV
                </div>
                <div>
                    <Link className={styles.Link} to="/indianews" >
                        INDIA
                    </Link>
                </div>
                <div>
                    <Link className={styles.Link} to="/covidnews">
                    COVID
                    </Link>
                    
                </div>
                <div>
                    OPINION
                </div>
                <div>
                    VIDEO
                </div>
                <div>
                    <Link className={styles.Link} to="/citynews">
                        CITIES
                    </Link>
                </div>
                <div>
                    <Link className={styles.Link} to="/worldnews">
                        WORLD
                    </Link>
                </div>
                <div>
                    OFFBEAT
                </div>
                <div>
                    TRENDS
                </div>
                <div>
                    PHOTOS
                </div>
                {/* <div className={styles.icons} > */}
                    <div className={styles.more} >
                        <GoKebabHorizontal onClick={()=>setShow(!show)} />
                    </div>
                    <div className={styles.nxticons}>
                        <BsTwitter />
                        <span></span>

                    </div>
                    <div className={styles.nxticons}>
                        <FaFacebookSquare />
                        <span></span>

                    </div>
                    <div className={styles.nxticons}>
                        <BsSmartwatch />
                    </div>
                    <div className={styles.nxticons}>
                        {/* <IoIosNotifications /> */}
                        <Popover>
                            <PopoverTrigger>
                                <Button style={{cursor: "pointer",background:"none", border:"none",color:"white",fontSize:"20px"}}><BsBellFill /></Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody style={{lineHeight:"21px", padding:"10px", marginTop:"5px",color:"#fff", background:"#841111", fontSize:"15px", fontWeight:"normal"}} >News alerts are turned off. <br /> <span style={{background:"#fff",color:"#841111",padding:"2px", borderRadius:"10px"}}>Click here</span> to turn on.</PopoverBody>
                            </PopoverContent>
                            </Popover>

                    </div>
                    {/* <div>
                    <ImSearch className={styles.nxticons}/>
                    </div> */}
                <div>
                <Popover>
                    <PopoverTrigger>
                        <Button style={{cursor: "pointer",background:"none", border:"none",color:"white",fontSize:"20px"}} ><ImSearch/></Button>
                        {/* <ImSearch className={styles.nxticons}/> */}
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                        <PopoverBody style={{ padding:"20px",background:"#3e3e3e",marginTop:"5px", borderRadius:"5px"}}>
                            <Input/> <Button style={{background:"#6288a5",color:"#fff", border:"none", borderRadius:"3px"}}>GO</Button>
                        </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
                </div>
                
            </div>
            {
                show && <div className={styles.showmore}>
                <div>SOUTH</div>
                <div>
                    <Link className={styles.Link} to="/sportsnews">
                    SPORTS
                    </Link>
                </div>
                <div>SCIENCE</div>
                <div>WEATHER</div>
                <div>TRAINS</div>
                <div>TV SCHEDUE</div>
            </div>
            }
            
            
        </div>
    )
}