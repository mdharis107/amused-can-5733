import React, { useEffect, useState } from 'react';
import { getScienceNews } from '../Components/api';
import FooterPage from '../Components/FooterComponents/Footer';
import Loading from '../Components/Loading/Loading';
import NavbarPage from '../Components/NavbarComponents/Navbar';
import styles from "../Components/PagesStyles/science.module.css"
import uuid from 'react-uuid';

function SciencePage() {
    const [data,setData] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getScienceNews()
        .then((res)=>{
            // console.log(res.data.articles)
            setData(res.data.news[0].articles)
            setLoading(false)
           
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[])
    return (
        <div style={{backgroundColor:"#eaeaea"}}>
        <div>
            <NavbarPage/>
        </div>
       { loading ?(<Loading/>) : ( <div className={styles.container} >
            {
                data?.map((ele)=>(
                    <div key={uuid()} >
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

export default SciencePage;