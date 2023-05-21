function Box({ children }) {

    return (
        <>
         <button className="text-8xl font-bold bg-blue-800 p-1 text-white text-center rounded w-[107px] align-middle hover:bg-blue-500 border-2 border-white-500 m-2">{children}</button>
        </>
    )
}

export default Box;