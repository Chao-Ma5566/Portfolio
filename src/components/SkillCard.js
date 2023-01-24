export const SkillCard = (props) => {
    return (
        <div className="item">
            <img src={props.arr.img} alt="Compétence"/>
            <h5>{props.arr.title}</h5>
            <p>{props.arr.descrip}</p>
        </div>
    ) 
}