import { useHover } from "../../../hooks/use-hover";

const MouseHoverCustom = () => {
  const [hover_ref_span, isHover_span] = useHover<HTMLSpanElement>();
  const [hover_ref_div, isHover_div] = useHover<HTMLDivElement>();

  return (
    <>
      <span ref={hover_ref_span} className="sp">
        Hoverd : {isHover_span ? "Wellcom span" : ""}
      </span>
      <div ref={hover_ref_div} className="dv">
        Hoverd : {isHover_div ? "Wellcom div" : ""}
      </div>
    </>
  );
};

export default MouseHoverCustom;
