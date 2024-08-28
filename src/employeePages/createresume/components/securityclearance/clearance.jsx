import React,{useState} from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'

export const Clearance = (props) => {
  const [edit, setEdit] = useState(false)
  const personalInfoValues = useSelector(
    (state) => state.personal.personalInfoValues
  );
  const showEdit = ()=>{
    setEdit(prev => !prev)
  }
  return (
    <div className='flex justify-between gap-2 bg-clearanceGrey py-2 items-center rounded-lg px-4 text-white'>
      
       <h3>{personalInfoValues.clearance}</h3>
       
      
       <div className='flex gap-2'>
        <button onClick={()=>{props.edit(); showEdit(); }}>   {edit ?
      <h2 onClick={()=>{props.save()}}>Save</h2>

        
        : <FaEdit/>}</button>
        <button  onClick={()=>{props.delete()}}><FaTrash /></button>
     
        </div>
    </div>
  )
}
