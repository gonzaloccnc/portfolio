import { useState } from 'react'
import { ExperienceCard } from './ExperienceCard.tsx'
import { Keywords, experiences } from '@utils/experience'

interface Props {
  defaultKey: keyof typeof Keywords
}

const Experience: React.FC<Props> = ({ defaultKey }) => {
  const [tab, setTab] = useState(defaultKey)

  const filterExp = experiences.filter(x => x.keyword === tab)

  const handleClick: React.MouseEventHandler = ({ target }) => {
    const active = document.querySelector('#nav_experiences ul li.active') as HTMLLIElement
    const li = target as HTMLLIElement

    active.classList.remove('active')
    li.classList.add('active')
    setTab(li.id as keyof typeof Keywords)
  }

  return (
    <section className='mt-32 pt-10 border-b border-b-extra pb-16' id='experience'>
      <h1 className='text-md mb-10 uppercase'>Experiencia</h1>
      <div className='flex gap-16 desktop:flex-row mobile:flex-col'>
        <aside
          className='desktop:w-1/4 mobile:w-full mobile:max-h-40 desktop:max-h-96 
          mobile:overflow-y-auto tablet:overflow-x-auto desktop:overflow-y-auto'
        >
          <nav className='text-md border-l border-l-extra' id='nav_experiences'>
            <ul className='flex mobile:flex-col tablet:flex-row desktop:flex-col'>
              <li
                className='px-6 py-3 cursor-pointer flex-shrink-0 tablet:w-60 desktop:w-auto active'
                id={Keywords.CV_PE}
                onClick={handleClick}
              >
                Consigue ventas
              </li>
              <li
                className='px-6 py-3 cursor-pointer flex-shrink-0 tablet:w-60 desktop:w-auto'
                onClick={handleClick}
                id={Keywords.ISIL}
              >
                ISIL
              </li>
            </ul>
          </nav>
        </aside>
        <article
          className='desktop:w-3/4 mobile:w-full flex flex-col gap-6 text-paragraft max-h-96 overflow-y-auto pr-3'
        >
          {
            filterExp.map(x =>
              <ExperienceCard
                key={x.keyword}
                role={x.role}
                date={x.date}
                enterprice={x.enterprice}
                works={x.works}
              />
            )
          }
        </article>
      </div>
    </section>
  )
}

export {
  Experience
}