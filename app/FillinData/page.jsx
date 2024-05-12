"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const FillinData = () => {
 // const dispatch = useDispatch();
  const[first_name,setFirst_name] = useState('');
  const[last_name,setLast_name] = useState('');
  const[age,setAge] = useState('');
  const[id_card,setId_card] = useState('');
  const[gender,setGender] = useState('');
  const[height,setHeight] = useState('');
  const[weight,setWeight] = useState('');
  const[disease,setDisease] = useState('');
  const[id_home,setId_home] = useState('');
  const[village_name,setVillage_name] = useState('');
  const[village_number,setVillage_number] = useState('');
  const[tombon,setTombon] = useState('');
  const[ district,setDistrict] = useState('');
  const[province,setProvince] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if (
      !first_name ||
      !last_name ||
      !age ||
      !id_card ||
      !gender ||
      !height ||
      !weight ||
      !disease ||
      !id_home ||
      !village_name ||
      !village_number ||
      !tombon ||
      !district ||
      !province ||
      !tel ||
      !email
    ) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }
    const formData = {
      first_name , 
      last_name , 
      age , 
      id_card ,
      gender , 
      height , 
      weight , 
      disease , 
      id_home , 
      village_name , 
      village_number , 
      tombon , 
      district , 
      province , 
      tel , 
      email 
    }

    setFirst_name('');
    setLast_name('');
    setAge('');
    setId_card('');
    setGender('');
    setHeight('');
    setWeight('');
    setDisease('');
    setId_home('');
    setVillage_name('');
    setVillage_number('');
    setTombon('');
    setDistrict('');
    setProvince('');
    setTel('');
    setEmail('');
  alert('ส่งข้อมูลสำเร็จแล้ว!');



    try{
      const response = await fetch('http://localhost:3200/FillinData',{
          method : 'post',
          headers : {
            'Content-type' : 'application/json',

          },
          body : JSON.stringify(formData),
      });
      /*const data = await response.json();
      console.log(data);*/

      //const router = useRouter();
      //router.push("/FillinData")
      if (response.ok){
        console.log(await response.json())
      }else{
        console.log('Failed to submit user data')
      }

    }catch (error){
      console.log("Error submitting user data: ", error)
    }
    
    
  }
 /* const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prevData) =>({
      ...prevData,
      [name] : value,

    }))
  }*/


  return (
    <>
    <div className=" pt-10" >
      <div className="px-[20px] font-kanit">
        <p className="text-center text-sky-900 text-3xl font-bold mb-4 ">กรอกข้อมูลผู้รับการประเมิน</p>
      </div>
    </div>
    <a className="block mb-2 text-sky-800 font-semibold text-2xl font-kanit px-80 pt-5">
      ข้อมูลส่วนตัวของผู้รับการประเมิน
    </a>
    <form className="pt-5 px-80" onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2 font-kanit">
        <div>
          <label 
            htmlFor = "first_name" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            ชื่อผู้ใช้ (ใส่คำนำหน้า)
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="ชื่อผู้ใช้ "
            className="w-full pl-5 pr-3  py-2  text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={first_name} 
            onChange={(e) => setFirst_name (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "last_name" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            นามสกุล
          </label>
          <input
            type="text"
            id="last_name"
            placeholder="นามสกุล"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={last_name} 
            onChange={(e) => setLast_name (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "age" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            อายุ (ปี)
          </label>
          <input
            type="age"
            id="age"
            placeholder="อายุ"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={age} 
            onChange={(e) => setAge (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "id_card" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            เลขบัตรประจำตัวประชาชน
          </label>
          <input
            type="text"
            id="id_card"
            placeholder="เลขบัตรประจำตัวประชาชน"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={id_card} 
            onChange={(e) => setId_card (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "gender" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            เพศ
          </label>
          <input
            type="text"
            id="gender"
            placeholder="เพศ"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={gender} 
            onChange={(e) => setGender (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "height" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            ส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="text"
            id="height"
            placeholder="ส่วนสูง"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={height} 
            onChange={(e) => setHeight (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "weight" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            น้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="text"
            id="weight"
            placeholder="น้ำหนัก"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={weight} 
            onChange={(e) => setWeight (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "disease" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            โรคประจำตัว
          </label>
          <input
            type="text"
            id="disease"
            placeholder="โรคประจำตัว"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={disease} 
            onChange={(e) => setDisease (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "id_home" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            บ้านเลขที่
          </label>
          <input
            type="text"
            id="id_home"
            placeholder="บ้านเลขที่"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={id_home} 
            onChange={(e) => setId_home (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "village_name" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            ชื่อหมู่บ้าน
          </label>
          <input
            type="text"
            id="village_name"
            placeholder="ชื่อหมู่บ้าน"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={village_name} 
            onChange={(e) => setVillage_name (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "village_number" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            หมู่ที่
          </label>
          <input
            type="text"
            id="village_number"
            placeholder="หมู่ที่"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={village_number} 
            onChange={(e) => setVillage_number (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "tombon" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            ตำบล
          </label>
          <input
            type="text"
            id="tombon"
            placeholder="ตำบล"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={tombon} 
            onChange={(e) => setTombon (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "district" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            อำเภอ
          </label>
          <input
            type="text"
            id="district"
            placeholder="อำเภอ"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={district} 
            onChange={(e) => setDistrict (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "province" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            จังหวัด
          </label>
          <input
            type="text"
            id="province"
            placeholder="จังหวัด"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={province} 
            onChange={(e) => setProvince (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "tel" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            เบอร์โทรศัพท์
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="เบอร์โทรศัพท์"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={tel} 
            onChange={(e) => setTel (e.target.value)}
          />
          </div>

          <div>
          <label 
            htmlFor = "Email" 
            className="block mb-2 text-sky-800 font-semibold text-lg"
            >
            อีเมล์
          </label>
          <input
            type="text"
            id="email"
            placeholder="ex@gmail.com"
            className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
            value={email} 
            onChange={(e) => setEmail (e.target.value)}
          />
          </div>

          <button
              type="submit"
              className="mt-4 w-full bg-blue-500 font-semibold text-white p-2 rounded-md hover:bg-blue-600"
              //onClick={(e) => }
          >
              บันทึก
          </button>
        </div>
    </form>
  
    </>
    
  )
};

export default FillinData;

/*const DefaultColumn = ({ children }) => {
  return (
    <div className='w-full px-24 md:w-1/2 lg:w-1/3'>
      <div className='mb-5'>{children}</div>
    </div>
    
  )
}

const NameUser = ()=>{
  return(
    <div className="relative max-w-xs font-kanit">
    <label className=" text-sky-800 font-semibold">ชื่อผู้ใช้</label>
    <input 
        type="text"
        id="First name"
        placeholder="ชื่อผู้ใช้ (ใส่คำนำหน้า)"
        className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg"
    />
</div>
  )
}

const LastName = () =>{
  return(
    <div className="relative max-w-xs font-kanit">
    <label className=" text-sky-800 font-semibold">นามสกุล</label>
    <input 
        type="text"
        id="last name"
        placeholder="นามสกุล"
        className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg"
    />
</div>
  )
}*/
/*<svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>*/

/*const FillinData = () =>{
  return(
    <>
    <div className=" pt-10" >
      <div className="px-[20px] font-kanit">
        <p className="text-center text-sky-900 text-3xl font-bold mb-4 ">กรอกข้อมูลผู้รับการประเมิน</p>
      </div>
    </div>
    

    </>

}

export default FillinData;*/


/*export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
  )
}*/