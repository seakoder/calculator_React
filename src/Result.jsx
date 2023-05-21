export default function Result({result}){
    return (
        <div className="Result absolute left-[50%] top-[35%] text-4xl font-bold text-white">
            Result is <span className="underline decoration-pink-500 text-8xl">{result}</span>
        </div>
    )
}