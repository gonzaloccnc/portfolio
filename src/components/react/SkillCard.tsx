interface SkillCarrdProps {
  title: string
  url: string
}

const SkillCard: React.FC<SkillCarrdProps> = ({ title, url }) => {
  return (
    <div
      className="wrap_blur relative desktop:w-full rounded-xl backdrop-blur-2xl shadow-[0px_0px_16px_0px_rgba(0,0,0,0.5)] bg-lightgray gradient-custom flex justify-center items-center h-32 after:absolute after:w-24 after:text-center after:text-xs after:bg-highlight after:rounded-md after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:p-2 after:transition-all after:duration-500 after:z-50 after:invisible after:scale-0 hover:after:scale-100 after:content-[attr(data-tooltip)] hover:after:visible"
      data-tooltip={title}
      aria-label={title}
      role="img"
      style={{
        backgroundImage: "radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(105, 59, 147, 0.2), rgba(110, 191, 244, 0.04) 50%, rgba(70, 144, 212, 0) 100%)"
      }}
    >
      <img src={`/portfolio/icons/${url}`} width='64' height='64' alt={title} loading="lazy" />
    </div>
  )
}

export { SkillCard }