


export default function page () {
    return (
        <div className=" w-full h-screen flex flex-col items-center justify-between text-center  py-12 gap-[25%] " >
            <div className=" h-full max-h-[450px] flex flex-col justify-between items-center  w-full max-w-[504px] ">
                <div  className=" w-full  text-center">
                <span className="flex flex-row items-end justify-center w-full  p-0 gap-2 " ><h1 className="text-[64px] font-medium leading-none p-0 m-0 text-[#46FD25] " >NETSTRIKE</h1><small className="text-[#46FD25] text-2xl font-medium m-0 " >v0.1</small>  </span>
                <h2 className="text-[#46FD25] text-5xl font-medium " >Secure Terminal Login</h2>
                </div>
                <button className="border-2 border-[#46FD25] text-[#46FD25] text-5xl font-medium max-w-[504px] w-full py-4 bg-[#000000] hover:bg-[#46FD25] hover:text-[#000000] transition duration-300 ease-in-out " >Connect</button>

            </div>


            <p className="w-full max-w-[1041px] text-[#46FD25] text-xl font-medium " >Access to this terminal is restricted under the Secure Operations Act. 
                Unauthorized access will trigger security protocols, including but not 
                limited to system lockdowns, excessive audit logs, and a passive-aggressive IT 
                ticket in your name. Repeat violations may lead to enforced policy reviews 
                and prolonged eye contact from security. Proceed with dignity.</p>
            
        </div>
    )
}