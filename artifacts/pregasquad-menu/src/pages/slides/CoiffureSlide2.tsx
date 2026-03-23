export default function CoiffureSlide2() {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: "var(--ps-black)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(233,30,140,0.12) 0%, transparent 50%)",
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
            03
          </span>
          <h2
            className="font-display font-bold tracking-wide"
            style={{ fontSize: "4vw", color: "var(--ps-cream)" }}
          >
            Coiffure
          </h2>
          <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-text-muted)" }}>— Colorations &amp; Traitements</span>
          <div className="flex-1 h-[1px] self-center" style={{ background: "linear-gradient(to right, var(--ps-pink-muted), transparent)" }} />
        </div>

        <div className="grid grid-cols-2 gap-[2.5vw] flex-1">
          <div
            className="rounded-[1vw] px-[2.5vw] py-[2.5vh] flex flex-col gap-[1.4vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Colorations</div>
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Coloration</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 250 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Mèche</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 300 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Balayage</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 600 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Reflects</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 300 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Permanent</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>300 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Défrisage</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>300 DH</span>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2.5vw] py-[2.5vh] flex flex-col gap-[1.4vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em] mb-[0.5vh]" style={{ color: "var(--ps-pink)" }}>Traitements &amp; Chignons</div>
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Traitement Protéiné (Beilla)</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 600 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Traitement Protéiné (Black Caviar)</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 750 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Tanino Plastie</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>1 000 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Chignon Classique</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Chignon Mariage / Soirée</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>600 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.4vw]" style={{ color: "var(--ps-cream)" }}>Chignon Élégant / Sophistiqué</span>
              <span className="font-body font-bold text-[1.4vw]" style={{ color: "var(--ps-gold)" }}>dès 500 DH</span>
            </div>
          </div>
        </div>

        <div className="mt-[2vh] font-body text-[1.1vw] text-center" style={{ color: "var(--ps-text-muted)" }}>
          Durée : 30 à 60 min · Produits professionnels inclus
        </div>
      </div>
    </div>
  );
}
