import axios from "axios"

// const payload = {
//     first_name: first_name,
//     last_name: last_name,
//     age: age,
//     id_card: id_card,
//     gender: gender,
//     height: height,
//     weight: weight,
//     disease: disease,
//     id_home: id_home,
//     village_name: village_name,
//     village_number: village_number,
//     tel: tel,
//     email: email
//   };

//   console.log(payload);

  axios.get("http://localhost:3200/ShowData", {
  params: payload
})
.then(response => {
  console.log('successful: ', response.data);
})
.catch(error => {
  console.log('Error: ', error);
});



export default function ShowData(){

    return (
<>
    
    <div className=" pt-10" >
            <div className="px-[20px] ">
                <p className="text-center text-sky-900 text-3xl font-bold mb-4 ">ข้อมูลผู้รับการประเมิน</p>
            </div>
           
        </div>
    </>

    )
   
  }
  