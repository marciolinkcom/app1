export const Input= (props)=>{

return(
    <div className = "form-group">
       <label className="from-label" htmlFor={props.id}>{props.label} </label>
       <input  type = {props.type} id= {props.id}  name = {props.name} placeholder = {props.placeholder}/>
    </div>
)
}