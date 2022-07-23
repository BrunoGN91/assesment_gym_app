export const Header = () => {
    return (
        <>
         <div className="bg-orange-400 h-28 flex justify-center items-center">
            <img src='' alt="" name="logo_icon" />
                <div className="w-1/2 flex justify-start row-auto items-start">
                    <h2 className="mx-5">Home</h2>
                    <h2 className="mx-5">Reports</h2>
                    <h2 className="mx-5">Manage</h2>
                </div>
                <div className="bg-white w-1/4 h-8 rounded-full flex items-center">
                    <input type="text" placeholder="Search.." className="mx-5 border-none outline-none"/>
                </div>
        </div>
        </>
    )
}