import { useEffect, useState } from "react";
import { getLatestNews } from "../Components/api";
import FooterPage from "../Components/FooterComponents/Footer";
import styles from "../Components/PagesStyles/latestnews.module.css"
import NavbarPage from "../Components/NavbarComponents/Navbar";
import Loading from "../Components/Loading/Loading";

function LatestNewsPage(){
    const [data,setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getLatestNews()
        .then((res)=>{
            // console.log(res.data.news[0].articles)
            setData(res.data.news[0].articles)
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
            <NavbarPage/>
        </div>
       { loading ?(<Loading/>) : ( <div className={styles.container} >
            {
                data?.map((ele)=>(
                    <div key={ele.headline} >
                        <img src={ele.image_url} className={styles.img} alt="" />
                        <h2><span className={styles.span}>TITLE: </span>{ele.headline}</h2>
                        <p><span className={styles.span} >DESCRIPTION: </span>{ele.description}</p>
                        <p className={styles.date}><span>PUBLISHED:</span>  {ele.posted_date}</p>
                    </div>
                ))
            }
        </div>)}
        <div>
            <FooterPage/>
        </div>
      
    </div>
)
}

export default LatestNewsPage;
