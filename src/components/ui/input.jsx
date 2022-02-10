export const Input= (props)=>{

const handleChange = (event) =>{
    const valor = event.target.value
    console.log('mudou', valor)
    props.setValue(valor)
}

return(
    <div className = "form-group">
       <label className="from-label" htmlFor={props.id}>{props.label} </label>
       <input  type = {props.type} 
       onChange ={handleChange}
       id= {props.id}  name = {props.name} placeholder = {props.placeholder}/>
    </div>
)
}