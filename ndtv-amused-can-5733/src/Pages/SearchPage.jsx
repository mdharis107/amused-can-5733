import React from 'react';

// import uuid from 'react-uuid';
import FooterPage from '../Components/FooterComponents/Footer';
import NavbarPage from '../Components/NavbarComponents/Navbar';
// import styles from "../Components/PagesStyles/search.module.css"



function SearchPage(data) {
   

    return (
        <div>
            <div>
                <NavbarPage  />
            </div>
            <div>
                {/* {
                   data?.map((ele)=>(
                    <div key={uuid()} >
                        <img src={ele.urlToImage} className={styles.img} alt="" />
                        <h2><span className={styles.span}>TITLE: </span>{ele.title}</h2>
                        <p><span className={styles.span} >DESCRIPTION: </span>{ele.description}</p>
                        <p className={styles.date}><span>PUBLISHED:</span>  {ele.posted_date}</p>
                    </div>
                ))
                } */}
            </div>
            <div>
                <FooterPage />
            </div>
        </div>
    );
}

export default SearchPage;