import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getSportsNews } from "../Components/api";
import FooterPage from "../Components/FooterComponents/Footer";
import Loading from "../Components/Loading/Loading";
import NavbarPage from "../Components/NavbarComponents/Navbar";
import styles from "../Components/PagesStyles/sportsnews.module.css"

function SportsPage(){
    const [data,setData] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getSportsNews()
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
                <NavbarPage/>
            </div>
            { loading? (<Loading/>): (<div className={styles.container} >
                {
                    data?.map((ele)=>(
                        <div key={uuid()} >
                            <img src={ele.urlToImage} className={styles.img} alt="" />
                            <h2><span className={styles.span}>TITLE: </span>{ele.title}</h2>
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
export default SportsPage;