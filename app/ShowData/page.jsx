"use client";
import axios from "axios"
import { useEffect, useState } from "react"
  
const  ShowData = () =>{
  const [userData, setUserData] = useState(null)

  useEffect(() =>{
    const fetchData = async() =>{
      try{
        const res = await axios.post("http://localhost:3200/ShowData")
        setUserData(res.data)
      }catch (error){
        console.error("Error fetching data : ",error)
      }
    }
    fetchData()
  },[])
  return (
    <>
      {userData && ( 
          <div className="pt-10 px-[20px]">
            <p className="text-center text-sky-900 text-3xl font-bold mb-4">ข้อมูลผู้รับการประเมิน</p>
            <p>ชื่อ : {userData.first_name}</p>
            <p>นามสกุล : {userData.last_name}</p>
            <p>อายุ : {userData.age}</p>
            <p>เลขบัตรประจำตัวประชาชน : {userData.id_card}</p> 
            <p>เพศ : {userData.gender}</p> 
            <p>ส่วนสูง : {userData.height}</p> 
            <p>น้ำหนัก : {userData.weight}</p> 
            <p>โรคประจำตัว : {userData.disease}</p> 
            <p>บ้านเลขที่ : {userData.id_home}</p> 
            <p>ชื่อหมู่บ้าน : {userData.village_name}</p> 
            <p>หมู่ที่ : {userData.village_number}</p> 
            {/* <p>ตำบล : {userData.tamboms.tamboms}</p> 
            <p>อำเภอ : {userData.tamboms.amphure.amphures}</p> 
            <p>จังหวัด : {userData.tamboms.amphure.province.provinces}</p>  */}
            <p>เบอร์โทรศัพท์ : {userData.tel}</p> 
            <p>อีเมล์ : {userData.email}</p> 
          </div>
      )}
  </>
)}

export default ShowData;
  