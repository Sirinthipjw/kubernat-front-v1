import axios from "axios"
  

const  ShowData = () =>{
axios.get("http://localhost:3200/ShowData", {
  params: payload
})
.then(response => {
  console.log('successful: ', response.data);
})
.catch(error => {
  console.log('Error: ', error);
});




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

export default ShowData;
  