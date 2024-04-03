import { technologies, type KeysTechnologies } from "@utils/technologies"
import { useState } from "react"
import { SkillCard } from "./SkillCard.tsx"

const SkillsContainer: React.FC = () => {
  const [item, setItem] = useState<KeysTechnologies>('frontend')

  const filterType = technologies[item]
  const handleClick: React.MouseEventHandler = (e) => {
    const key = (e.currentTarget as HTMLLIElement).dataset.type as KeysTechnologies
    setItem(key)
  }

  return (
    <section className="mt-32" id="skills" aria-roledescription="Tecnologías">
      <h1 className="uppercase">Tecnologías y Habilidades</h1>
      <div className="mt-10">
        <nav className="w-3/5 mx-auto mb-10 text-md">
          <ul className="flex gap-2 flex-wrap justify-center" id="areas">
            <li
              className="px-8 py-3 bg-h-primary text-white rounded-md cursor-pointer"
              data-type="frontend"
              onClick={handleClick}
            >
              Frontend
            </li>
            <li
              className="px-8 py-3 bg-h-primary text-white rounded-md cursor-pointer"
              data-type="backend"
              onClick={handleClick}
            >
              Backend
            </li>
            <li
              className="px-8 py-3 bg-h-primary text-white rounded-md cursor-pointer"
              data-type="tools"
              onClick={handleClick}
            >
              Tools
            </li>
            <li
              className="px-8 py-3 bg-h-primary text-white rounded-md cursor-pointer"
              data-type="others"
              onClick={handleClick}
            >
              Otros
            </li>
          </ul>
        </nav>
        <section
          className="grid tablet:grid-cols-skills mobile:grid-cols-skills-mobile gap-x-5 gap-y-10 place-content-center"
        >
          {
            filterType.map(tech => (
              <SkillCard key={tech.url} title={tech.label} url={tech.url} />
            ))
          }
        </section>
      </div>
    </section>
  )
}

export { SkillsContainer }