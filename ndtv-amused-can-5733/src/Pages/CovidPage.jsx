import { useEffect, useState } from "react";
import { getCovidNews } from "../Components/api";
import FooterPage from "../Components/FooterComponents/Footer"
import Loading from "../Components/Loading/Loading";
import NavbarPage from "../Components/NavbarComponents/Navbar"
import styles from "../Components/PagesStyles/covidnews.module.css"

function CovidNewsPage(){
    const [data,setData] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getCovidNews()
        .then((res)=>{
            // console.log(res.data.articles)
            setData(res.data.articles)
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
           { loading? (<Loading/>):( <div className={styles.container} >
                {
                    data?.map((ele)=>
                    <div key={ele.description + Date.now()} className={styles.cards} >
                        <div>
                            <img className={styles.img} src={ele.urlToImage} alt="" />
                        </div>
                        <div>
                            <h4><span className={styles.span} >TITLE:</span> {ele.title}</h4>
                            <h4><span className={styles.span} >DESCRIPTION:</span> {ele.description}</h4>
                            <p className={styles.date}><span>PUBLISHED:</span>  {ele.publishedAt}</p>
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

export default CovidNewsPage