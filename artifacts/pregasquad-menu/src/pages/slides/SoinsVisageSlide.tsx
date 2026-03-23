export default function SoinsVisageSlide() {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: "var(--ps-black)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.14) 0%, transparent 50%)",
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
            06
          </span>
          <h2
            className="font-display font-bold tracking-wide"
            style={{ fontSize: "4vw", color: "var(--ps-cream)" }}
          >
            Soins du Visage
          </h2>
          <div className="flex-1 h-[1px] self-center" style={{ background: "linear-gradient(to right, var(--ps-pink-muted), transparent)" }} />
        </div>

        <div className="grid grid-cols-3 gap-[2vw] flex-1">
          <div
            className="rounded-[1vw] px-[2vw] py-[2.5vh] flex flex-col gap-[1.6vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em]" style={{ color: "var(--ps-pink)" }}>Soins Essentiels</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Gommage + Masque</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Mini Soin de Visage</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>150 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Soin Classique</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>200 DH</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2vw] py-[2.5vh] flex flex-col gap-[1.6vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em]" style={{ color: "var(--ps-pink)" }}>Soins Avancés</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Soin Éclaircissant</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>300 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Soin Hydrafaciale</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>350 DH</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2vw] py-[2.5vh] flex flex-col gap-[1.6vh]"
            style={{ background: "linear-gradient(135deg, rgba(233,30,140,0.12), rgba(139,17,87,0.1))", border: "1px solid rgba(233,30,140,0.35)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em]" style={{ color: "var(--ps-pink)" }}>Astuce Beauté</div>
            <div className="flex flex-col gap-[2vh] mt-[1vh]">
              <p className="font-body text-[1.25vw] leading-relaxed" style={{ color: "var(--ps-cream)" }}>
                Nos soins visage sont réalisés avec des produits professionnels haut de gamme.
              </p>
              <p className="font-body text-[1.2vw] italic" style={{ color: "var(--ps-rose-gold)" }}>
                Durée : 60 min par soin
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[2vh] font-body text-[1.1vw] text-center" style={{ color: "var(--ps-text-muted)" }}>
          Consultez notre équipe pour un soin personnalisé
        </div>
      </div>
    </div>
  );
}
