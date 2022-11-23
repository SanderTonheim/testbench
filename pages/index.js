import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Collapsible } from './collapsible'

export default function Home() {
	return (
		<>
			<h1>Dette er en testbranch med små problemer og løsninger.</h1>
			<Link href='/toggleproblem'>
				<button>toggle spesifikk child ut ifra class name</button>
			</Link>
			<Collapsible name={'hva kan jeg gjøre her?'}>
				<h1>Ole er en tiss</h1>
				<h2>Men jeg er glad i han likevel {'<3'} </h2>
			</Collapsible>
			<Collapsible name={'hva kan jeg IKKE gjøre her?'}>
				<h1>LOL BARE KØDDER</h1>
			</Collapsible>
			<Collapsible name={'Ole dør i dag siden han er syk'}>
				<h1>NEIDA BARE KØDDER OM AT EG KØDDER</h1>
			</Collapsible>
			<Collapsible name={'tenker vi trekant?'}>
				<h1>meg deg og dafina</h1>
			</Collapsible>
		</>
	)
}
