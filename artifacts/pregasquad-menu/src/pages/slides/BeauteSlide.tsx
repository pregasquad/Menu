export default function BeauteSlide() {
  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: "var(--ps-black)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(233,30,140,0.15) 0%, transparent 50%)",
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
            01
          </span>
          <h2
            className="font-display font-bold tracking-wide"
            style={{ fontSize: "4vw", color: "var(--ps-cream)" }}
          >
            Beauté
          </h2>
          <div className="flex-1 h-[1px] self-center" style={{ background: "linear-gradient(to right, var(--ps-pink-muted), transparent)" }} />
        </div>

        <div className="grid grid-cols-3 gap-[2vw] flex-1">
          <div
            className="rounded-[1vw] px-[2vw] py-[2.5vh] flex flex-col gap-[1.6vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em]" style={{ color: "var(--ps-pink)" }}>Maquillage</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Maquillage Simple</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Maquillage et faux-cils</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>150 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Maquillage Pro</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>300 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Maquillage Fiancé &amp; Marié</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>600 DH</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2vw] py-[2.5vh] flex flex-col gap-[1.6vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em]" style={{ color: "var(--ps-pink)" }}>Extensions de Cils</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Extension Permanente</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>350 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Cils Normaux</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>70 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Cils Mèche/Mèche</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>100 DH</span>
              </div>
              <div className="h-[0.5px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Cils Naturel</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>150 DH</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-[1vw] px-[2vw] py-[2.5vh] flex flex-col gap-[1.6vh]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(233,30,140,0.2)" }}
          >
            <div className="font-body font-semibold text-[1.1vw] uppercase tracking-[0.15em]" style={{ color: "var(--ps-pink)" }}>Sourcils</div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex justify-between items-center">
                <span className="font-body text-[1.3vw]" style={{ color: "var(--ps-cream)" }}>Coloration des Sourcils</span>
                <span className="font-body font-bold text-[1.3vw]" style={{ color: "var(--ps-gold)" }}>30 DH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[2vh] font-body text-[1.1vw] text-center" style={{ color: "var(--ps-text-muted)" }}>
          Durée : 60 min par prestation
        </div>
      </div>
    </div>
  );
}
