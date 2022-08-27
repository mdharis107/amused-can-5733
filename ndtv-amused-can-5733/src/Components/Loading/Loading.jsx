import styles from "../Loading/loading.module.css"

export default function Loading(){
    return(
             <div className={styles.loader_container}>
      	  <div className={styles.spinner}></div>
        </div>
       
    )
}