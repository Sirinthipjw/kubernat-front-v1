"use client";
import axios from "axios"
import { useEffect, useState } from "react"
  

const  ShowData = () =>{
  const[idc, setIdc] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState('')
  const [userData, setUserData] = useState(null)

  useEffect(() =>{
    const fetchData = async() =>{
      const res = await axios.post("http://localhost:3200/ShowData", {idc})
      setUserData(res.data)
    }
    if (idc && String(idc).length === 13){
      fetchData()
    }
      
     
    

  },[idc])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  }
  const handleClose =()=>{
    setIsVisible(false)
  }
  

  const handleClick = (e) =>{
    e.preventDefault();
    if (String(idc).length !== 13) {
      setError('กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก');
    } else {
      setError('')
      handleSubmit(e);
      
    }
    
    console.log("id_card : ",idc)
  
   
  }



return (
  <>
   {isVisible && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 font-kanit">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold mt-5 text-sky-900">โปรดกรอกเลขบัตรประชาชน</h2>
          <button onClick={handleClose} className= " text-gray-600 hover:text-gray-900 focus:outline-none text-3xl">
            &times;
          </button>
          
        </div>
        <form onSubmit = {handleSubmit}>
          <input type="password" 
               value={idc}
               onChange={(e) => setIdc(e.target.value)}
               className="flex w-full h-15 border border-sky-900 rounded-lg p-2 mb-2"
               placeholder="กรอกเลขบัตรประชาชน"
            />
            {error && <p className="font-thin text-red-600 text-base">{error}</p>} 
          {/* {error && <p style={{ color: 'red' }}>{error}</p>}   */}
          <div className="flex justify-center items-center pt-3">
            <button type="submit" onClick={handleClick} className="bg-blue-500 text-white rounded p-2 w-160 ">
            ค้นหา
            </button>
          </div>
        </form>
      </div>
    </div>
    )}
    {userData && ( // แสดงผลข้อมูลผู้รับการประเมินเมื่อมีข้อมูล
        <div className="pt-10 px-[20px]">
          <p className="text-center text-sky-900 text-3xl font-bold mb-4">ข้อมูลผู้รับการประเมิน</p>
          {/* แสดงข้อมูลผู้รับการประเมินที่ได้จาก API */}
          <p>ชื่อ: {userData.first_name}</p>
          <p>นามสกุล : {userData.last_name}</p>
          <p>อายุ: {userData.age}</p>
          {/* ตัวอย่างเพิ่มเติมของข้อมูลที่จะแสดง */}
        </div>
    )}
      







  </>
  )
   
  }

export default ShowData;
  