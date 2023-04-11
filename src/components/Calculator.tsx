import Screen from './Screen'
import ButtonBox from './ButtonBox'
import Button from './Button';


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

export default function Calculator(){
    return(
        <>
            <div className='block w-72 bg-slate-950 p-2 flex-col space-y-4 rounded-md'>
                <Screen value={'0'} className={'overflow-hidden block bg-slate-900 h-16 text-gray-50 text-end align-middle p-2 text-4xl'}/>
                <ButtonBox>
                    {btnValues.flat().map((btn, i)=>{
                        return(
                            <Button className={`text-xl hover:brightness-110 p-2 py-4 font-semibold rounded-md text-white ${btn === "=" ? "bg-amber-600 col-span-2" : "bg-slate-700"}`}
                             key={i} value={btn} onClick={() => console.log(`${btn} pressed`)}/>
                        )
                    })}
                </ButtonBox>
            </div>
        </>
    )
}