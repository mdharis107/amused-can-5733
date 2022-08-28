
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getHomeBot, getHomeLeft, getHomePage } from "../Components/api";
import FooterPage from "../Components/FooterComponents/Footer";
import Loading from "../Components/Loading/Loading";
import NavbarPage from "../Components/NavbarComponents/Navbar";
import styles from "../Components/PagesStyles/HomePage.module.css"

export default function HomePage(){
    const [data,setData] = useState();
    const [leftData,setLeftData] = useState()
    const [bot,setBot] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getHomePage()
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
    
    useEffect(()=>{
        setLoading(true)
        getHomeLeft()
        .then((res)=>{
            // console.log(res.data.articles)
            setLeftData(res.data.articles)
            setBot(res.data.articles)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)

        })
    },[])
    useEffect(()=>{
        setLoading(true)
        getHomeBot()
        .then((res)=>{
            // console.log(res.data.articles)
            setBot(res.data.articles)
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
                <div>
                { loading? (<Loading/>): (
                    <div className={styles.whole}>
                        <div>
                        <h1 className={styles.heading} >HEADLINE</h1>
                    <div className={styles.left} >
                    
                        {
                        leftData?.map((ele)=>(
                            <div className={styles.leftcard} >
                                
                                <div >
                                    <img className={styles.leftimg} src={ele.urlToImage} alt="" />
                                </div>
                                <div>
                                    <p>{ele.title}</p>
                                </div>
                            </div>
                        ))
                        }
                       
                    </div>
                    <h1 className={styles.heading} >TRENDING</h1>
                    <div className={styles.left} id={styles.bot}>
                        {
                       bot?.map((ele)=>(
                            <div className={styles.leftcard}>
                                <div >
                                    <img className={styles.leftimg} src={ele.urlToImage} alt="" />
                                </div>
                                <div>
                                    <p>{ele.title}</p>
                                </div>
                            </div>
                        ))
                        }
                       
                    </div>

                    </div>

                <div className={styles.container} >
                {
                    data?.map((ele)=>(
                        <div key={uuid()} >
                            <img src={ele.urlToImage} className={styles.img} alt="" />
                            <p><span className={styles.span}>TITLE: </span>{ele.title}</p>
                            {/* <p><span className={styles.span} >DESCRIPTION: </span>{ele.description}</p> */}
                            {/* <p className={styles.date}><span>PUBLISHED:</span>  {ele.posted_date}</p> */}
                        </div>
                    ))
                }
            </div>
            </div>
            )
            }
                </div>
            <div>
                <FooterPage/>
            </div>
        </div>
    )
}