import logoImg from "@assets/IMG_4806_1774256783426.jpeg";

export default function ClosingSlide() {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: "var(--ps-black)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(233,30,140,0.22) 0%, rgba(139,17,87,0.1) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[0.4vh]"
        style={{ background: "linear-gradient(to right, transparent, var(--ps-pink), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[0.4vh]"
        style={{ background: "linear-gradient(to right, transparent, var(--ps-pink), transparent)" }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-[3vh] px-[8vw]">
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "16vw",
            height: "16vw",
            borderRadius: "50%",
            padding: "0.6vw",
            background: "linear-gradient(135deg, var(--ps-pink), var(--ps-pink-muted))",
          }}
        >
          <div style={{ borderRadius: "50%", overflow: "hidden", width: "100%", height: "100%" }}>
            <img
              src={logoImg}
              alt="Pregasquad Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <div className="text-center">
          <h1
            className="font-display font-black leading-[0.9] tracking-tight"
            style={{ fontSize: "5.5vw", color: "var(--ps-cream)" }}
          >
            PREGA<span style={{ color: "var(--ps-pink)" }}>SQUAD</span>
          </h1>
          <p
            className="font-display italic mt-[1.5vh]"
            style={{ fontSize: "2vw", color: "var(--ps-rose-gold)" }}
          >
            Glow and Beyond
          </p>
        </div>

        <div
          className="h-[1px] w-[20vw]"
          style={{ background: "linear-gradient(to right, transparent, var(--ps-pink), transparent)" }}
        />

        <div className="text-center flex flex-col gap-[1.2vh]">
          <p
            className="font-body font-light text-[1.6vw]"
            style={{ color: "var(--ps-text-light)" }}
          >
            Votre beauté, notre passion
          </p>
          <p
            className="font-body text-[1.3vw]"
            style={{ color: "var(--ps-text-muted)" }}
          >
            Prenez rendez-vous et laissez-nous sublimer votre beauté
          </p>
        </div>

        <div className="flex gap-[4vw] mt-[1vh]">
          <div className="text-center">
            <div className="font-body text-[1vw] uppercase tracking-[0.2em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Beauté</div>
            <div className="font-body text-[1.1vw]" style={{ color: "var(--ps-cream)" }}>Maquillage &amp; Cils</div>
          </div>
          <div className="w-[1px]" style={{ background: "rgba(233,30,140,0.4)" }} />
          <div className="text-center">
            <div className="font-body text-[1vw] uppercase tracking-[0.2em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Coiffure</div>
            <div className="font-body text-[1.1vw]" style={{ color: "var(--ps-cream)" }}>Soins &amp; Colorations</div>
          </div>
          <div className="w-[1px]" style={{ background: "rgba(233,30,140,0.4)" }} />
          <div className="text-center">
            <div className="font-body text-[1vw] uppercase tracking-[0.2em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Onglerie</div>
            <div className="font-body text-[1.1vw]" style={{ color: "var(--ps-cream)" }}>Faux Ongles &amp; Vernis</div>
          </div>
          <div className="w-[1px]" style={{ background: "rgba(233,30,140,0.4)" }} />
          <div className="text-center">
            <div className="font-body text-[1vw] uppercase tracking-[0.2em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Soins</div>
            <div className="font-body text-[1.1vw]" style={{ color: "var(--ps-cream)" }}>Visage &amp; Épilation</div>
          </div>
        </div>
      </div>
    </div>
  );
}
