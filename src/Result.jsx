export default function Result({result}){
    return (
        <div className=" absolute left-[720px] top-64 text-4xl font-bold text-white">
            Result is <span className="underline decoration-pink-500 text-8xl">{result}</span>
        </div>
    )
}