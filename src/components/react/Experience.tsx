import { useState } from 'react'
import { ExperienceCard } from '../react/ExperienceCard.tsx'
import { Keywords, experiences } from '@utils/experience'

const Experience: React.FC = () => {
  const [tab, setTab] = useState(Keywords.CV_PE)

  const filterExp = experiences.filter(x => x.keyword === tab)

  const handleClick: React.MouseEventHandler = ({ target }) => {
    const active = document.querySelector('#nav_experiences ul li.active') as HTMLLIElement
    const li = target as HTMLLIElement
    const wrap = document.querySelector('#wrapper_exp') as HTMLElement

    if (active.id === li.id) return

    active.classList.remove('active')
    li.classList.add('active')
    wrap.classList.add("opacity-0")
    setTab(li.id as Keywords)

    setTimeout(() => {
      wrap.classList.remove("opacity-0")
    }, 200)

  }

  return (
    <section className='mt-32 pt-10 border-b border-b-extra pb-16' id='experience'>
      <h1 className='mb-10 uppercase'>Experiencia</h1>
      <div className='flex gap-16 desktop:flex-row mobile:flex-col'>
        <aside
          className='desktop:w-1/4 mobile:w-full mobile:max-h-40 desktop:max-h-96 
          mobile:overflow-y-auto tablet:overflow-x-auto desktop:overflow-y-auto'
        >
          <nav className='text-md border-l border-l-extra' id='nav_experiences'>
            <ul className='flex mobile:flex-col tablet:flex-row desktop:flex-col'>
              {
                experiences.map((exp, idx) => (
                  <li
                    className={`px-6 py-3 cursor-pointer flex-shrink-0 tablet:w-60 desktop:w-auto ${idx === 0 ? 'active' : ''}`}
                    onClick={handleClick}
                    id={exp.keyword}
                  >
                    {exp.keyword}
                  </li>
                ))
              }
            </ul>
          </nav>
        </aside>
        <article
          id="wrapper_exp"
          className='desktop:w-3/4 mobile:w-full flex flex-col gap-4 text-paragraft max-h-96 overflow-y-auto pr-3 transition-opacity ease-in-out duration-200'
        >
          {
            filterExp.map(x =>
              <ExperienceCard
                key={x.keyword}
                role={x.role}
                date={x.date}
                enterprice={x.enterprice}
                works={x.works}
                locate={x.locate}
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