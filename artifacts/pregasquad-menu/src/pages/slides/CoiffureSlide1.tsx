export default function CoiffureSlide1() {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: "var(--ps-black)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(233,30,140,0.12) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[0.4vh]"
        style={{ background: "linear-gradient(to right, transparent, var(--ps-pink), transparent)" }}
      />

      <div className="relative flex h-full flex-col px-[6vw] py-[5vh]">
        <div className="flex items-baseline gap-[2vw] mb-[3vh]">
          <span
            className="font-display font-bold italic"
            style={{ fontSize: "1.2vw", color: "var(--ps-pink)", letterSpacing: "0.3em" }}
          >
            02
          </span>
          <h2
            className="font-display font-bold tracking-wide"
            style={{ fontSize: "4vw", color: "var(--ps-cream)" }}
          >
            Coiffure
          </h2>
          <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-text-muted)" }}>— Soins &amp; Brushing</span>
          <div className="flex-1 h-[1px] self-center" style={{ background: "linear-gradient(to right, var(--ps-pink-muted), transparent)" }} />
        </div>

        <div className="grid grid-cols-2 gap-[2.5vw] flex-1">
          <div
            className="rounded-[1vw] px-[2.5vw] py-[2.5vh] flex flex-col gap-[1.4vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Soins de Base</div>
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Brushing</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>50 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Coupe Unique</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>50 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Coupe et Brushing</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>90 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Brushing + Shampoing</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>70 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Cheveux Bouclés</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>80 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Wavy Hair</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>70 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Touching Cheveux</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>30 DH</span>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2.5vw] py-[2.5vh] flex flex-col gap-[1.4vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Soins Cheveux</div>
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Soin Cheveux Normal</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Soin Tanino</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 200 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Soin Cheveux Réparation</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 150 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Soin Paraffine</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>40 DH</span>
            </div>
          </div>
        </div>

        <div className="mt-[2vh] font-body text-[1.1vw] text-center" style={{ color: "var(--ps-text-muted)" }}>
          Durée : 30 à 60 min
        </div>
      </div>
    </div>
  );
}
