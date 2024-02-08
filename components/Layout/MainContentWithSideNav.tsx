import SideNav from "./SideNav"

export default function MainContentWithSideNav({ content }: { content: JSX.Element | JSX.Element[] }) {
    return <div className="grid grid-cols-[70px_1fr] grid-rows-1 gap-[10px]">
        <SideNav />
        <div className="main bg-yellow-500 rounded-md">{content}</div>
    </div>
}