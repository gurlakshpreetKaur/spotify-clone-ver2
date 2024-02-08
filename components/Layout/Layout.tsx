import { ReactNode } from "react";
import PlaybackGrid from "./PlaybackGrid";

export default function Layout({ children }: { children: JSX.Element | JSX.Element[] | ReactNode }) {
    return <PlaybackGrid><></></PlaybackGrid>;
}