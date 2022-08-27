import { useEffect, useState } from "react"
import styles from "../Components/PagesStyles/worldnews.module.css"
import { getWorldNews } from "../Components/api"
import FooterPage from "../Components/FooterComponents/Footer"
import NavbarPage from "../Components/NavbarComponents/Navbar"
import Loading from "../Components/Loading/Loading"

function WorldNewsPage(){
    const [wordata, setWorData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getWorldNews()
        .then((res)=>{
            
            // console.log(res.data.news[0].articles)
            setWorData(res.data.news[0].articles)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[])

    return(
        <div style={{backgroundColor:"#eaeaea"}}>
            <div>
                <NavbarPage />
            </div>
           {loading? (<Loading/>):( <div className={styles.wholecard} >
                {
                    wordata?.map((ele)=>
                    <div key={ele.description + Date.now()} className={styles.cards} >
                        <div>
                            <img className={styles.img} src={ele.image_url} alt="" />
                        </div>
                        <div>
                            <h4><span className={styles.span} >TITLE:</span> {ele.headline}</h4>
                            <h4><span className={styles.span} >DESCRIPTION:</span> {ele.description}</h4>
                            <p className={styles.date}><span>PUBLISHED:</span>  {ele.posted_date}</p>
                        </div> 
                    </div>
                    )
                }
            </div>)}
            <div>
                <FooterPage />
            </div>
        </div>
    )
}

export default WorldNewsPage