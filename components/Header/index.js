import Link from "next/link"
import styles from './Header.module.css'

export default function Header(){
    return(
        <header>
            <div>Header Area</div>
            <Link href={'/'}>Home</Link>
        </header>
    )
}