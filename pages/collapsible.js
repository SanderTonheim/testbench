import { useState, useRef } from 'react'
import s from '../styles/collapsible.module.css'

export const Collapsible = ({ children, name }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [arrowOpen, setArrowOpen] = useState(false)
	const parentRef = useRef()

	return (
		<div className={s.collapsible}>
			<div className={s.list_items}>
				<h1>test</h1>
				<button
					className={s.toggle}
					onClick={() => setIsOpen(!isOpen)}>
					klikk meg
				</button>
			</div>
			<div
				className={s.content_parent}
				ref={parentRef}
				style={isOpen ? { height: parentRef.current.scrollHeight + 'px' } : { height: '0px' }}>
				<div className={s.content}>{children}</div>
			</div>
		</div>
	)
}
