import { type Experience } from '@utils/experience'

interface Props extends Experience { }

const ExperienceCard: React.FC<Props> = ({ role, date, enterprice, works }) => {
	return (
		<>
			<div
				className='flex tablet:items-center justify-between tablet:flex-row mobile:flex-col mobile:gap-2 tablet:gap-0'
			>
				<h1 className='text-xl text-white'>{role}</h1>
				<h2 className='text-base leading-6'>{date}</h2>
			</div>
			<h3 className='text-xs text-highlight'>{enterprice}</h3>
			<ul className='flex flex-col gap-2'>
				{works.map((x, ix) => <li key={ix} className='tablet:text-base mobile:text-xs'>{x}</li>)}
			</ul>
		</>
	)
}

export {
	ExperienceCard
}