export default function Playback() {
    return <div className="w-full h-full grid grid-cols-[1fr_2fr_1fr] grid-row-1 mx-[5px]">
        <div className="flex flex-row items-center">
            <img src={"https://wallpaperaccess.com/full/1642272.jpg"} className="h-[70px] w-auto aspect-square rounded-sm" alt={"image"} />
            <div className="mx-4 h-full flex-grow grid grid-rows-2 grid-cols-1">
                <div className="bg-green-900">

                </div>
                <div className="bg-green-800">

                </div>
            </div>
        </div>
        <div className="bg-green-500"></div>
        <div className="bg-green-800"></div>
    </div>
}