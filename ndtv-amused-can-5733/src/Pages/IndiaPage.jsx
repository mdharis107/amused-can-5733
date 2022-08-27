import { useEffect, useState } from "react"
import NavbarPage from "../Components/NavbarComponents/Navbar"
import styles from "../Components/PagesStyles/indiapage.module.css"
import Loading from "../Components/Loading/Loading"
import FooterPage from "../Components/FooterComponents/Footer"
import getIndiaPage from "../Components/api"



export function IndiaPages(){
    const [indata, setIndata] = useState()
    const [more,setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getIndiaPage()
        .then((res)=>{
            setIndata(res.data.articles)
            console.log(res.data.articles)
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
            {
                loading ?( <Loading /> ) : (
                    <div className={styles.card} >
                    {indata?.map((ele)=>
                        <div key={ele.title} >
                             <img className={styles.img} src={ele.urlToImage} alt="" />
                            <h3>{ele.title}</h3>
                            <div style={{marginTop:"15px"}} onClick={()=>(setMore(!more))}>
                                { more? "Read more.." : 
                                (
                                    <p>{ele.description}</p>

                                )}
                            </div> 
                        </div>
                    )}
                </div>
                )
            }
           
            <div>
                <FooterPage />
            </div>
        </div>
    )
}