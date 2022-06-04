//Height for iphones (fuck iphones)
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty(" — app-height", `${window.innerHeight}px`)
   }
   window.addEventListener("resize", appHeight)
   appHeight()