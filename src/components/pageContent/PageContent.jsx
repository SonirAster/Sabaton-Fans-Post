import React from "react";
import styles from './PageContent.module.css';
import RoutesList from "./RoutesList";

const PageContent = () => {
    return (
        <div className={styles.contentPage} >
           <RoutesList />       
        </div>
    )
}

export default PageContent;

{/* <img src='https://e-cdn-images.dzcdn.net/images/artist/e12f06552e4b18019347911a64a08849/264x264-000000-80-0-0.jpg'/> */ }


