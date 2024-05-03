import React from "react";
const FillinData = () => {
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
  <form className="pt-5 px-80">
    <div className="grid gap-6 mb-6 md:grid-cols-2 font-kanit">
      <div>
        <label for = "first_name" className="block mb-2 text-sky-800 font-semibold text-lg">ชื่อผู้ใช้ (ใส่คำนำหน้า)</label>
        <input
          type="text"
          id="first_name"
          placeholder="ชื่อผู้ใช้ "
          className="w-full pl-5 pr-3  py-2  text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "last_name" className="block mb-2 text-sky-800 font-semibold text-lg">นามสกุล</label>
        <input
          type="text"
          id="last_name"
          placeholder="นามสกุล"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "age" className="block mb-2 text-sky-800 font-semibold text-lg">อายุ (ปี)</label>
        <input
          type="age"
          id="age"
          placeholder="อายุ"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "id_card" className="block mb-2 text-sky-800 font-semibold text-lg">เลขบัตรประจำตัวประชาชน</label>
        <input
          type="text"
          id="id_card"
          placeholder="เลขบัตรประจำตัวประชาชน"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "gender" className="block mb-2 text-sky-800 font-semibold text-lg">เพศ</label>
        <input
          type="text"
          id="gender"
          placeholder="เพศ"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "height" className="block mb-2 text-sky-800 font-semibold text-lg">ส่วนสูง (เซนติเมตร)</label>
        <input
          type="text"
          id="heght"
          placeholder="ส่วนสูง"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "weight" className="block mb-2 text-sky-800 font-semibold text-lg">น้ำหนัก (กิโลกรัม)</label>
        <input
          type="text"
          id="weight"
          placeholder="น้ำหนัก"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "disease" className="block mb-2 text-sky-800 font-semibold text-lg">โรคประจำตัว</label>
        <input
          type="text"
          id="disease"
          placeholder="โรคประจำตัว"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "id_home" className="block mb-2 text-sky-800 font-semibold text-lg">บ้านเลขที่</label>
        <input
          type="text"
          id="id_home"
          placeholder="บ้านเลขที่"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "Village_name" className="block mb-2 text-sky-800 font-semibold text-lg">ชื่อหมู่บ้าน</label>
        <input
          type="text"
          id="Village_name"
          placeholder="ชื่อหมู่บ้าน"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "Village_number" className="block mb-2 text-sky-800 font-semibold text-lg">หมู่ที่</label>
        <input
          type="text"
          id="Village_number"
          placeholder="หมู่ที่"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "tombon" className="block mb-2 text-sky-800 font-semibold text-lg">ตำบล</label>
        <input
          type="text"
          id="tombon"
          placeholder="ตำบล"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "district" className="block mb-2 text-sky-800 font-semibold text-lg">อำเภอ</label>
        <input
          type="text"
          id="district"
          placeholder="อำเภอ"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>

        <div>
        <label for = "province" className="block mb-2 text-sky-800 font-semibold text-lg">จังหวัด</label>
        <input
          type="text"
          id="province"
          placeholder="จังหวัด"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>

        <div>
        <label for = "tel" className="block mb-2 text-sky-800 font-semibold text-lg">เบอร์โทรศัพท์</label>
        <input
          type="tel"
          id="tel"
          placeholder="เบอร์โทรศัพท์"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>
        <div>
        <label for = "Email" className="block mb-2 text-sky-800 font-semibold text-lg">อีเมล์</label>
        <input
          type="text"
          id="Email"
          placeholder="ex@gmail.com"
          className="w-full pl-5 pr-3  py-2 p-5 text-gray-500 bg-transparent outline-none border focus:border-sky-800 shadow-sm rounded-lg" 
        />
        </div>








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
    


  );
  

}

export default FillinData;*/