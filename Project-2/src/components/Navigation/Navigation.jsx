import styles from './Navigation.module.css';


const Navigation = () => {
  console.log(styles);
  return (
        <nav className={styles.navigation}>

        <div className = "logo">
    <img src = "/img/download.png" alt = "logo"/>

        </div>

    <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>



    </ul>





        </nav>



  )
}

export default Navigation