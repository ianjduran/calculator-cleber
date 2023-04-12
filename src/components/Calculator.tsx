import Screen from './Screen'
import ButtonBox from './ButtonBox'
import Button from './Button';
import { useState } from 'react';


const btnValues = [
    [7, 8, 9, "/"],
    [4, 5, 6, "X"],
    [1, 2, 3, "-"],
    ["C", 0, "+-", "+"],
    ["="],
  ];


const calculateResult = (a: number, b:number, sign:string) =>
  sign === "+" ? a + b : 
  sign === "-" ? a - b : 
  sign === "X" ? a * b : 
                 a / b;

const calcnitialValues={
    sign: "",
    num: 0,
    res: 0
}

export default function Calculator(){

    const [calc, setCalc] = useState(calcnitialValues)

    const handleReset = () => {
        setCalc(calcnitialValues)
    }


    const handleNumberClick = (e: any) =>{
        e.preventDefault()
        const value = e.target.innerHTML;
        // Ir almacenando con setState
        
    }


    const handleSignBtnClick = (e:any)=>{
        e.preventDefault()
        const val = e.target.innerHTML; 
        // Almacenar el valor del signo
        // algo como res = calculateResult(res,num,sign)
        try {
            // Calcular los valores y almacenarlo en calc.res con el setState

        }
        catch(err){
            // Handle division por 0 o NaN
        }
       

    }

    // this 99% sure wrong
    const handleInvertBtnClick = (e:any)=>{
        e.preventDefault()
        const val = e.target.innerHTML;

        setCalc({
            ...calc,
            sign: val,
            res: !calc.res ? calc.res*(-1) : 0,
            num: !calc.num ? calc.num*(-1) : 0,
        })

    }

    

    return(
        <>
            <div className='block w-72 bg-slate-950 p-2 flex-col space-y-4 rounded-lg'>
                <Screen value={calc.num? calc.num : calc.res} className={'overflow-hidden block bg-slate-900 h-16 text-gray-50 text-end align-middle p-2 text-4xl rounded-md'}/>
                <ButtonBox>
                    {btnValues.flat().map((btn, i)=>{
                        return(
                            <Button className={`text-xl hover:brightness-110 p-2 py-4 font-semibold rounded-md text-white ${btn === "=" ? "bg-amber-600 col-span-4" : "bg-slate-700"}`}
                             key={i} value={btn} onClick={
                                btn==="C" ? handleReset :
                                btn==="+-" ? handleInvertBtnClick :
                                btn==="+" || btn==="-" || btn==="X" || btn==="/" || btn==="="? handleSignBtnClick :
                                handleNumberClick

                             }/>
                        )
                    })}
                </ButtonBox>
            </div>
        </>
    )
}