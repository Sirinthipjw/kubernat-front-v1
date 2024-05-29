"use client";
import axios from "axios"
import { useState } from "react"
  

const  ShowData = () =>{
  const[idc, setIdc] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState('')

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    
   if (!idc || idc.length !== 13) {
    setError('กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก');
  } else {
    setError('');
    
    console.log('เลขบัตรประชาชนถูกต้อง:', idc);
  }
 
    const response = await axios.post("http://localhost:3200/ShowData", { idc});
    
      
    
  };

  const handleClose =()=>{
    setIsVisible(false)
  }
  // const handleChange = (e) => {
  //   setIdc(e.target.value);
  // };

  const handleClick = async (e) =>{
    if (!idc || idc.length !== 13) {
      setError('กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก');
    } else {
      setError('');
      
      console.log('เลขบัตรประชาชนถูกต้อง:', idc);
    }
    console.log("id_card : ",idc)
  }



return (
  <>
   {isVisible && (
    <div onSubmit = {handleSubmit}className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 font-kanit">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold mt-5 text-sky-900">โปรดกรอกเลขบัตรประชาชน</h2>
          <button onClick={handleClose} className= " text-gray-600 hover:text-gray-900 focus:outline-none text-3xl">
            &times;
          </button>
          
        </div>
        
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
      </div>
       
    </div>
   
          )}
   
      <div className="pt-10 px-[20px] ">
            <p className="text-center text-sky-900 text-3xl font-bold mb-4 ">ข้อมูลผู้รับการประเมิน</p>
      </div>
   







  </>
  )
   
  }

export default ShowData;
  