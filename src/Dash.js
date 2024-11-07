import React, { useEffect, useState } from "react";
import logo from "./New folder/logo_white.png"
import Datatake from "./component/Datatake";
import axios from "axios";

function Dash(){


    const [dataset,getdata]=useState({});
    const [out,setout]=useState(false)
    const [predict,setpredict]=useState(true)

    const process = (dat)=>{
        return dat.reduce((acc, curr) => {
          Object.keys(curr).forEach((key) => {
            if (!acc[key]) acc[key] = []; // Initialize if not present
            acc[key].push(curr[key]);     // Push value to array
          });
          return acc;
        }, {});
      }

    axios.get("/get-heart-condition/")
    .then(res=>{
        getdata(process(res.data.heart_conditions))
})
function predicts(){
    console.log("sfg")
    axios.get("/predict")
    .then(res=>{
        console.log(res.data)
        if(res.data.started===true){
            const time = setInterval(()=>{
                axios.get("/getResults/")
                .then(res=>{
                    console.log(res.data)
                    if(res.data.message==="Prediction in progress"){

                    }else{
                        clearInterval(time)
                        setout(res.data.prediction)
                    }
                })
            },1000)
        }
    })
}
    return(
        <div className="w-screen h-svh ">
            <div className="text-white w-full h-fit bg-red-700">
            <nav className="w-full h-fit box-border px-3 py-4 flex flex-col">
                <img src={logo} className="w-fit h-8 mx-auto"/>
            </nav>
           <div className="w-full flex justify-between">
           <div>
            <h1 className="text-2xl px-3 font-bold pb-9 py-4">Welcome, user
            <p className="text-sm font-normal my-1 text-gray-100">Let's check your heart</p>
            </h1>
            </div>
            <button onClick={()=>{setpredict(!predict)}} className="mr-3 text-5xl text-red-700 bg-white h-12 w-12 mt-7 rounded-full">+</button>
           </div>
            
            </div>

           {predict? <div className="box-border w-full px-3 h-fit py-4 flex flex-col -mt-5 rounded-3xl bg-white">
            <p className="text-sm">prediction:{out.prediction}<br></br>prediction_probability:{out.prediction_probability}</p>

            <button onClick={predicts} className="w-fit my-3 bg-red-600 text-white py-2 px-3 rounded">start prediction</button>
                
               <div>
               {Object.values(dataset).map((item, index) => (
    <Datatake da={{ 'item': item, 'name': index }} key={index} />
))}

               </div>
           
            

        </div>:<div className="box-border px-3 h-fit py-4 flex flex-col overflow-scroll -mt-5 rounded-3xl bg-white">
            <h1 className="my-3 capitalize text-xl font-bold text-center text-red-600">dataentry</h1>
            <form className="w-full flex flex-col gap-5">
            <input type="number" min="0" max="1" placeholder="male" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="age" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="education" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="currentSmoker" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="cigsPerDay" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="BPMeds" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="prevalentStroke" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="prevalentHyp" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="diabetes" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="totChol" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="sysBP" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="BPMeds" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="diaBP" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="BMI" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="heartRate" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <input type="text" placeholder="glucose" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
            <button type="submit" className="text-white text-lg bg-red-700 py-2 rounded">Predict</button>
          
            </form>
            </div>}
        </div>
    )
}export default Dash