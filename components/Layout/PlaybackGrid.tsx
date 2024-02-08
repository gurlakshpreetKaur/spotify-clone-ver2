import Playback from "../Playback/Playback";
import MainContentWithSideNav from "./MainContentWithSideNav";

export default function PlaybackGrid({ children }: { children: JSX.Element | JSX.Element[] }) {
    return <div className="h-screen grid grid-rows-[1fr_70px] grid-cols-1 gap-[10px] bg-black p-[10px]">
        <MainContentWithSideNav content={children} />

        <Playback />
    </div>
}