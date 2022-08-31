import { Link } from "react-router-dom"
import styles from "../FooterComponents/footer.module.css"
import { AiFillFacebook } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { TiSocialInstagram } from "react-icons/ti"
import { AiFillLinkedin } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import { AiOutlineCopyrightCircle} from "react-icons/ai"
import { useState } from "react"
// import { List, UnorderedList } from "@chakra-ui/react"

// AiFillFacebook
// BsTwitter
// TiSocialInstagram
// AiFillLinkedin

function FooterPage(){
    const [fix,setFix] = useState(false)
    
    function setFixed(){
        if(window.scrollY >=4000 ){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }

    window.addEventListener("scroll",setFixed)
   
    return(
        <div className={styles.footer} id={ fix ? styles.open_foot : styles.close_foot }>
            <div className={styles.first_box} style={{borderRight:"1px solid #d2d2d2",padding:"15px 20px"}}>
                <div>
                    <Link to="/">
                    <img style={{width:"100px", height:"35px"}} src="https://upload.wikimedia.org/wikipedia/commons/c/c5/NDTV_logo.svg" alt="" />
                    </Link>
                </div>

                <div style={{fontSize:"13px"}} >
                    FOLLOW US ON
                </div>

                <div className={styles.icon} >
                    <div>
                        <AiFillFacebook />
                    </div>
                    <div> <BsTwitter/></div>
                    <div> <TiSocialInstagram/> </div>
                    <div> 
                        <AiFillLinkedin/>     
                    </div>
                </div>

                <div style={{display:"flex", justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                    <div>
                    <input placeholder="SEARCH" className={styles.search} type="text" />

                    </div>
                    <div>
                    <button className={styles.btn} > <FiSearch /> </button>

                    </div>
                </div>
            </div>
            

            <div style={{padding:" 0px 10px"}} >
                <div className={styles.listing} style={{ borderBottom: "1px solid #d2d2d2"}}>
                    <ul>
                        <li>ABOUT US</li>
                        <li>ADVERTISE</li>
                        <li>BRAND AMP</li>
                        <li>EGP SERVICES</li>
                        <li>CHANNELS</li>
                        <li>DISCLAIMER</li>
                        <li>FEEDBACK</li>
                        <li>INVESTORS</li>
                        <li>REDRESSALS</li>
                        <li>SERVICE TERMS</li>
                        <li>ARCHIVES</li>
                    </ul>
                </div>
                <div className={styles.scnd_footer}>
                    <div id={styles.first_line} >NDTV GROUP SITES</div>
                    <div>NEWS</div>
                    <div>BUISNESS</div>
                    <div>HINDI</div>
                    <div>MOVIES</div>
                    <div>CRICKET</div>
                    <div>FOOD</div>
                    <div>TECH</div>
                    <div>AUTO</div>
                    <div>TRAINS</div>
                    
                </div>
                <div className={styles.third_footer}>
                    <div style={{padding:"10px", borderRight:"1px solid #d2d2d2" }} >THIS WEBSITE FOLLOWS THE DNPA CODE OF ETHICS</div>
                    <div><span  ><AiOutlineCopyrightCircle/> </span> COPYRIGHT NDTV CONVERGENCE LIMITED 2022. ALL RIGHT</div>
                </div>
            </div>
        </div>
    )
}

export default FooterPage