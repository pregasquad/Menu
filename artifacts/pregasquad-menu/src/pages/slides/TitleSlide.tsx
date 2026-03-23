import logoImg from "@assets/IMG_4806_1774256783426.jpeg";

export default function TitleSlide() {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: "var(--ps-black)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(233,30,140,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(139,17,87,0.25) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-full w-[2px]"
        style={{ background: "linear-gradient(to bottom, transparent, var(--ps-pink), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 h-full w-[2px]"
        style={{ background: "linear-gradient(to bottom, transparent, var(--ps-pink), transparent)" }}
      />

      <div className="relative flex h-full items-center justify-between px-[8vw]">
        <div className="flex flex-col justify-center" style={{ maxWidth: "52vw" }}>
          <div
            className="mb-[2vh] text-[1.1vw] font-body font-semibold uppercase tracking-[0.35em]"
            style={{ color: "var(--ps-pink)" }}
          >
            Glow and Beyond
          </div>
          <h1
            className="font-display font-black leading-[0.92] tracking-tight"
            style={{ fontSize: "7.5vw", color: "var(--ps-cream)" }}
          >
            PREGA
            <span style={{ color: "var(--ps-pink)" }}>SQUAD</span>
          </h1>
          <h2
            className="font-display font-light italic mt-[1.5vh]"
            style={{ fontSize: "3vw", color: "var(--ps-rose-gold)" }}
          >
            Salon de Beauté
          </h2>
          <div
            className="mt-[4vh] h-[1px] w-[18vw]"
            style={{ background: "linear-gradient(to right, var(--ps-pink), transparent)" }}
          />
          <p
            className="mt-[3vh] font-body font-light text-[1.6vw] leading-relaxed"
            style={{ color: "var(--ps-text-muted)" }}
          >
            Menu des Services
          </p>
        </div>

        <div className="flex flex-col items-center justify-center" style={{ width: "34vw" }}>
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "28vw",
              height: "28vw",
              borderRadius: "50%",
              padding: "0.8vw",
              background: "linear-gradient(135deg, var(--ps-pink), var(--ps-pink-muted))",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={logoImg}
                alt="Pregasquad Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                crossOrigin="anonymous"
              />
            </div>
          </div>
          <div
            className="mt-[2.5vh] text-[1.15vw] font-body font-medium tracking-[0.2em] uppercase"
            style={{ color: "var(--ps-gold)" }}
          >
            Excellence &amp; Élégance
          </div>
        </div>
      </div>
    </div>
  );
}
