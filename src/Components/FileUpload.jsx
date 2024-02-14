import axios from "axios"
import { useState } from "react"


const FileUpload = () => {

  const [myFile, setMyFile] = useState('')
  const [data, setData] = useState([])
  const URL = "http://localhost:8000/upload";
  const changeFile = (e) =>{
    let reader = new FileReader()
    let myImage = e.target.files[0]
    reader.readAsDataURL(myImage)
    reader.onload = () =>{
      setMyFile(reader.result)
    }
  }

  const uploadIt = () =>{
  
    axios.post(URL , {myFile})
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }
  return (
    <div>
      <input type="file" name="" id="" onChange={(e)=>changeFile(e)}/>
      <button className="" onClick={uploadIt}>Upload file</button>


      <img src={data.storedImage} alt="" />
      </div>
  )
}

export default FileUpload