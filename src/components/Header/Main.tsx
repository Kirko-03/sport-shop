import { MenuItem } from "@material-ui/core"
import { Link } from "react-router-dom"

export const Main = () => {
    const products =[{name:'Creatin'},{name:'Protain'},{name:'BCA'}]
    return <div>
        
        {products.map(el=><MenuItem component={Link} to={`/${el.name}`} >
        {el.name}
          </MenuItem>)}
    </div>
}