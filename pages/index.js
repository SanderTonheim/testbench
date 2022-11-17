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
			<Collapsible>
				<h1>Ole er en tiss</h1>
				<h2>Men jeg er glad i han likevel {'<3'} </h2>
			</Collapsible>
			<Collapsible>
				<h1>LOL BARE KØDDER</h1>
			</Collapsible>
			<Collapsible>
				<h1>NEIDA BARE KØDDER OM AT EG KØDDER</h1>
			</Collapsible>
			<Collapsible>
				<h1>HJELP MEG</h1>
			</Collapsible>
		</>
	)
}
