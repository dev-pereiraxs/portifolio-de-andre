export default function PhotoCard() {
  return (
    <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[20rem] md:max-w-none">
      {/* grade sutil e halo de luz atrás do círculo */}
      <div className="photo-grid pointer-events-none absolute -inset-[12%]" aria-hidden="true" />
      <div className="pointer-events-none absolute -inset-[2%] rounded-full bg-violet/15 blur-2xl" aria-hidden="true" />

      <div className="float relative shadow-[0_0_40px_-12px_rgba(139,92,246,.35)] rounded-full">
        <figure className="relative aspect-square w-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,.12)_0%,rgba(91,33,182,.05)_65%,rgba(9,9,11,.2)_100%)]">
          <img
            src="./andre-card.webp"
            alt="Retrato de André Luiz Matos Pereira"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 left-0 w-full select-none"
          />
        </figure>
        {/* anel roxo em degradê */}
        <div className="ring-gradient pointer-events-none absolute inset-0" aria-hidden="true" />
      </div>
    </div>
  )
}
