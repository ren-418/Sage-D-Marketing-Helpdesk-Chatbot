import { useEffect, useRef } from "react";

const Location_Map = () => {

  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === 'object' && Object.prototype.hasOwnProperty.call(e.data, "datawrapper-height")) {
        const iframes = document.querySelectorAll("iframe");
        for (const key in e.data["datawrapper-height"]) {
          for (let i = 0; i < iframes.length; i++) {

            if (iframes[i].contentWindow === e.source) {
              iframes[i].style.height = `${e.data["datawrapper-height"][key]}px`;
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden", }} className="!text-[white] px-[10px] relative mr-[-48px]">
      <iframe
        ref={iframeRef}
        className="top-0 left-0 w-full h-full"
        title="Average Electricity Bill By State"
        aria-label="Map"
        id="datawrapper-chart-gSwGM"
        src="https://datawrapper.dwcdn.net/gSwGM/2/"
        scrolling="no"
        frameBorder="0"
        style={{ width: "100%", minWidth: "100% !important", border: "none", height: "456px", color: 'red !important' }}
      ></iframe>
      <div className="absolute bottom-[-2px] left-0 w-full h-[32px] bg-[#0f352d] z-10"></div>
      <div className="absolute top-[-2px] right-0 h-[120px] w-[48px] bg-[#0f352d] z-10"></div>
    </div>



  );
};

export default Location_Map;
