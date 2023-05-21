export default function Numbers({setOldHolder, oldholder}) {
    let numArr = [{ id: 0, 'num': 0 }, { id: 1 , 'num':1 }, { id: 2, 'num': 2 }, { id: 3, 'num': 3 }, { id: 4, 'num': 4 },
    { id: 5, 'num': 5 }, { id: 6, 'num': 6}, { id: 7, 'num': 7 }, { id: 8, 'num': 8 }, { id: 9, 'num': 9 },{ id: 10, 'num': '.'}];

    {
        return (
            <div className="flex flex-row flex-wrap w-4/12 absolute left-48 top-[28%]">
                {numArr.map(a =>
                    <div key={a.id} className="border-2 border-white-500 m-2">
                        <button onClick={()=>{console.log(a.num), setOldHolder(oldholder + a.num)}} className="text-8xl font-bold bg-green-500 m-1 text-white text-center rounded w-24 hover:bg-green-200 hover:text-black">
                            {a.num}
                        </button>
                    </div>
                   
                )} 

            </div>
        )
    }
} 
