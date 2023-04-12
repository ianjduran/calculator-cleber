import Screen from './Screen'
import ButtonBox from './ButtonBox'
import Button from './Button';
import { useState } from 'react';


const btnValues = [
    [7, 8, 9, "/"],
    [4, 5, 6, "X"],
    [1, 2, 3, "-"],
    ["AC", 0, "+-", "+"],
    ["="],
  ];




const calcInitial={
    expression: "",
    res: ""
}


export default function Calculator(){

    const [calc, setCalc] = useState(calcInitial)


    const handleButtonClick = (e: any) =>{
        e.preventDefault()
        let btnValue = e.target.innerHTML;
        switch(btnValue){
            case "AC":
                setCalc(calcInitial)
                break
            case "+-":
                setCalc({
                    ...calc,
                    res: calc.res? (parseInt(calc.res) * -1).toString() : calc.res
                })
                break
            case "=":
                try{
                    const result = eval(calc.expression)
                    setCalc({
                        ...calc,
                        res: result
                    })
                }
                catch(err: any){
                    setCalc({
                        ...calcInitial,
                        res: String(err.name)
                    })
                }
                break
            default:
                if(btnValue=="X")
                    btnValue="*"
                if(calc.res!==""){
                    setCalc({
                        ...calc,
                        expression: calc.res
                    })
                }
                setCalc({
                    ...calcInitial,
                    expression: calc.expression + btnValue
                    
                })
                break

        }
        
    }

  

    return(
        <>
            <div className='block w-72 bg-slate-950 p-2 flex-col space-y-4 rounded-lg'>
                <Screen value={calc.res? calc.res : calc.expression} className={'overflow-hidden block bg-slate-900 h-16 text-gray-50 text-end align-middle p-2 text-4xl rounded-md'}/>
                <ButtonBox>
                    {btnValues.flat().map((btn, i)=>{
                        return(
                            <Button className={`text-xl hover:brightness-110 p-2 py-4 font-semibold rounded-md text-white ${btn === "=" ? "bg-amber-600 col-span-4" : "bg-slate-700"}`}
                             key={i} value={btn} onClick={
                                handleButtonClick

                             }/>
                        )
                    })}
                </ButtonBox>
            </div>
        </>
    )
}