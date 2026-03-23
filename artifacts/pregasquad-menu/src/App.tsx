import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { slides } from "@/slideLoader";

function getSlideIndex(pathname: string): number {
  const match = pathname.match(/^\/slide(\d+)$/);
  if (!match) return -1;
  const position = parseInt(match[1], 10);
  return slides.findIndex((s) => s.position === position);
}

function SlideEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = getSlideIndex(location.pathname);
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      navigate(`/slide${slides[currentIndex + 1].position}`);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(`/slide${slides[currentIndex - 1].position}`);
    }
  };

  useEffect(() => {
    if (currentIndex === -1) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
      }
      if ((event.key === "ArrowLeft" || event.key === "ArrowUp") && currentIndex > 0) {
        navigate(`/slide${slides[currentIndex - 1].position}`);
      }
      if (
        (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === " ") &&
        currentIndex < slides.length - 1
      ) {
        navigate(`/slide${slides[currentIndex + 1].position}`);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentIndex, navigate]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < slides.length - 1;

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          <slide.Component />
        </div>
      ))}

      {canGoPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "12vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1vh",
            background: hovered === "left"
              ? "linear-gradient(to right, rgba(233,30,140,0.18), transparent)"
              : "linear-gradient(to right, rgba(0,0,0,0.25), transparent)",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s ease",
            zIndex: 50,
          }}
        >
          <div style={{
            width: "4vw",
            height: "4vw",
            borderRadius: "50%",
            background: hovered === "left" ? "rgba(233,30,140,0.9)" : "rgba(255,255,255,0.12)",
            border: "2px solid " + (hovered === "left" ? "#E91E8C" : "rgba(255,255,255,0.3)"),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backdropFilter: "blur(4px)",
          }}>
            <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1vw",
            fontWeight: 500,
            color: hovered === "left" ? "#E91E8C" : "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "color 0.3s ease",
          }}>
            Précédent
          </span>
        </button>
      )}

      {canGoNext && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "12vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1vh",
            background: hovered === "right"
              ? "linear-gradient(to left, rgba(233,30,140,0.18), transparent)"
              : "linear-gradient(to left, rgba(0,0,0,0.25), transparent)",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s ease",
            zIndex: 50,
          }}
        >
          <div style={{
            width: "4vw",
            height: "4vw",
            borderRadius: "50%",
            background: hovered === "right" ? "rgba(233,30,140,0.9)" : "rgba(255,255,255,0.12)",
            border: "2px solid " + (hovered === "right" ? "#E91E8C" : "rgba(255,255,255,0.3)"),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backdropFilter: "blur(4px)",
          }}>
            <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1vw",
            fontWeight: 500,
            color: hovered === "right" ? "#E91E8C" : "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "color 0.3s ease",
          }}>
            Suivant
          </span>
        </button>
      )}

      <div style={{
        position: "absolute",
        bottom: "2.5vh",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "0.7vw",
        zIndex: 50,
      }}>
        {slides.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === currentIndex ? "2.2vw" : "0.7vw",
              height: "0.7vw",
              borderRadius: "1vw",
              background: i === currentIndex ? "#E91E8C" : "rgba(255,255,255,0.25)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function AllSlides() {
  return (
    <div className="bg-black">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="slide relative aspect-video overflow-hidden"
          style={{ width: "1920px", height: "1080px" }}
        >
          <div className="h-full w-full [&_.h-screen]:!h-full [&_.w-screen]:!w-full">
            <slide.Component />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // DO NOT edit this useEffect
  useEffect(() => {
    if (location.pathname === "/" || getSlideIndex(location.pathname) === -1) {
      if (location.pathname !== "/allslides" && slides.length > 0) {
        navigate(`/slide${slides[0].position}`, { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  // DO NOT edit this useEffect, this allows the parent frame to navigate
  // between slides via postMessage so it can avoid changing the iframe 
  // src (which causes a white flash).
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (
        event.data?.type === "navigateToSlide" &&
        typeof event.data.position === "number" &&
        slides.some((s) => s.position === event.data.position)
      ) {
        navigate(`/slide${event.data.position}`);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate]);

  if (location.pathname === "/allslides") {
    return <AllSlides />;
  }

  return <SlideEditor />;
}
