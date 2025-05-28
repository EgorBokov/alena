import { Header } from "@/components/Header/Header.jsx";
import styles from './Container.module.scss'

import './App.css'
import {useEffect} from "react";

export const App = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        }
    }, []);
    return (

        <div>
            <Header />
        </div>
    )
}