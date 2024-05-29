"use client";
import Image from "next/image";
import Logo from "../public/FOOT.png";
import Link from "next/link";
//import "./Navbarstly.css";
//import { usePathname } from 'next/navigation'
import React,{ useState } from "react";
import { BsClipboard2PlusFill } from "react-icons/bs";

const Navbar = () => {
  
  //const  currentPath = usePathname();
  const [menu, setMenu] = useState("Home");
  return (
    <>
      <nav className="flex w-lg p-3 shadow-lg bg-write items-center justify-between border-b mx:auto">
        <div className="px-5">
       
          <Link href="/" onClick={()=>setMenu("Home")} className={menu === "Home" ? "active" : ""}>
            <Image
              src={Logo}
              alt="logopages"
              width= "auto"
              height= "50"
              priority
            />
          </Link>
          
        </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className=" flex font-medium text-sky-800">
          <li onClick={()=>setMenu("FillinData")} className={menu === "FillinData" ? "text-sky-800" : " text-gray-500"}>
            <button className=" px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg ">
              <Link href="/FillinData" ><BsClipboard2PlusFill className="inline-block"/>กรอกข้อมูลผู้รับการประเมิน</Link>
            </button>
          </li>
          <li onClick={()=>setMenu("ShowData")} className={menu === "ShowData" ? "text-sky-800" : " text-gray-500"}>
            <button className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700  rounded-lg ">
              <Link href="/ShowData">ข้อมูลผู้รับการประเมิน</Link>
          </button>
          </li>
          <li onClick={()=>setMenu("Heatmap")} className={menu === "Heatmap" ? "text-sky-800" : " text-gray-500"}>
          <button className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg " >
            <Link href="/Heatmap">Heatmap รูปเท้า</Link>
          </button>
          </li>
          <li onClick={()=>setMenu("AnalyzeData")} className={menu === "AnalyzeData" ? "text-sky-800" : " text-gray-500"}>
          <button className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg ">
            <Link href="/AnalyzeData">การวิเคราะห์ค่า COP</Link>
          </button>
          </li>
          <li onClick={()=>setMenu("HistoricalData")} className={menu === "HistoricalData" ? "text-sky-800" : " text-gray-500"}>
          <button className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg ">
            <Link href="/HistoricalData">ข้อมูลย้อนหลัง</Link>
          </button>
          </li>
          <li onClick={()=>setMenu("Login")} className={menu === "Login" ? "text-sky-800" : " text-gray-500"}>
          <button className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg ">
            <Link href="/Login">ออกจากระบบ</Link>
          </button>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

/*<ul className="flex font-medium text-sky-800">
            
            <li onClick={()=>setMenu("FillinData")} className={menu === "FillinData" ? "active" : ""}>
              <a className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg ">
              <Link href="/FillinData">กรอกข้อมูลผู้รับการประเมิน</Link>
              </a>
          </li>
          <li onClick={()=>setMenu("ShowData")} className={menu === "ShowData" ? "active" : ""}>
            <a className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
              <Link href="/ShowData">ข้อมูลผู้รับการประเมิน</Link>
            </a>
            
          </li>
          <li onClick={()=>setMenu("Heatmap")} className={menu === "Heatmap" ? "active" : ""}>
          <a className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/Heatmap">Heatmap รูปเท้า</Link>
            </a>
          </li>
          <li onClick={()=>setMenu("AnalyzeData")} className={menu === "AnalyzeData" ? "active" : ""}>
          <a className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg ">
            <Link href="/AnalyzeData">การวิเคราะห์ค่า COP</Link>
            </a>
          </li>
          <li onClick={()=>setMenu("HistoricalData")} className={menu === "HistoricalData" ? "active" : ""}>
          <a className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/HistoricalData">ข้อมูลย้อนหลัง</Link>
            </a>
          </li>
          <li onClick={()=>setMenu("Login")} className={menu === "Login" ? "active" : ""}>
          <a className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/Login">Logout</Link>
            </a>
          </li>
        </ul>*/
        


/*<ul className="flex font-medium  text-sky-800">
          <li className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg hover:active:bg-sky-700 hover:after:bg-sky-700 ">
            <Link href="/FillinData">กรอกข้อมูลผู้รับการประเมิน</Link>
          </li>
          <li className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/ShowData">ข้อมูลผู้รับการประเมิน</Link>
          </li>
          <li className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/Heatmap">Heatmap รูปเท้า</Link>
          </li>
          <li className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/AnalyzeData">การวิเคราะห์ค่า COP</Link>
          </li>
          <li className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/HistoricalData">ข้อมูลย้อนหลัง</Link>
          </li>
          <li className="px-5 py-3 hover:text-slate-100 hover:bg-sky-700 rounded-lg">
            <Link href="/Login">Logout</Link>
          </li>
        </ul>*/
