
import { useDispatch, useSelector } from "react-redux";

function DeleteTask(props) {
   const dispatch = useDispatch()
   const { deletetask } = useSelector((state) => state)


   return (
      <div>


      </div>
   )
}

export default DeleteTask