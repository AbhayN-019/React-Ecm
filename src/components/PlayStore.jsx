import './playstore.css'
const PlayStore = (props) =>{
    const {storeData} = props
    const{title, image, ratings } = storeData
    return(
        <div>
            <img src={image} alt={title}  className="icons"/>
            <h2>{title}</h2>
            <p>{ratings}</p>
        </div>
    )
}
export default PlayStore