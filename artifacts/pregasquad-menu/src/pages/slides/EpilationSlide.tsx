export default function EpilationSlide() {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: "var(--ps-black)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(233,30,140,0.13) 0%, transparent 50%)",
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
            07
          </span>
          <h2
            className="font-display font-bold tracking-wide"
            style={{ fontSize: "4vw", color: "var(--ps-cream)" }}
          >
            Épilation
          </h2>
          <div className="flex-1 h-[1px] self-center" style={{ background: "linear-gradient(to right, var(--ps-pink-muted), transparent)" }} />
        </div>

        <div className="grid grid-cols-3 gap-[2vw] flex-1">
          <div
            className="rounded-[1vw] px-[2vw] py-[2vh] flex flex-col gap-[1.1vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1vw] uppercase tracking-[0.15em] mb-[0.3vh]" style={{ color: "var(--ps-pink)" }}>Visage &amp; Zones Petites</div>
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Duvet</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>20 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Menton</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>20 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Visage Cire</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>80 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Visage (Fil)</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>75 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Aisselles</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>30 DH</span>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2vw] py-[2vh] flex flex-col gap-[1.1vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1vw] uppercase tracking-[0.15em] mb-[0.3vh]" style={{ color: "var(--ps-pink)" }}>Bras &amp; Ventre</div>
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Avant-Bras</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>50 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Bras Complet</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>80 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Ventre</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>60 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Dos</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2vw] py-[2vh] flex flex-col gap-[1.1vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1vw] uppercase tracking-[0.15em] mb-[0.3vh]" style={{ color: "var(--ps-pink)" }}>Jambes &amp; Maillot</div>
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Demi-Jambe</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>60 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Jambe Complète</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Bord Maillot</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>50 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Maillot Brésilien</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Maillot Complet</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>120 DH</span>
            </div>
            <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="font-body text-[1.2vw]" style={{ color: "var(--ps-cream)" }}>Cire Complète</span>
              <span className="font-body font-bold text-[1.2vw]" style={{ color: "var(--ps-gold)" }}>300 DH</span>
            </div>
          </div>
        </div>

        <div className="mt-[2vh] font-body text-[1.1vw] text-center" style={{ color: "var(--ps-text-muted)" }}>
          Durée : 10 à 60 min selon la zone
        </div>
      </div>
    </div>
  );
}
