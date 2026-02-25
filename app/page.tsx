
import MaskHover from "@/components/custom/MaskHover";

export default function Home() {
  return (
    <div>
      {/* <MaskHover /> */}
      <MaskHover
        heroContent={<span>Hi, I'm <strong>Alex</strong> 🚀</span>}
        maskRevealContent={<span className="text-black">Building cool stuff</span>}
        maskBackgroundColor="#6366f1"
        maskTextColor="#0f172a"
        initialMaskSize={60}
        hoverMaskSize={500}
        backgroundColor="bg-slate-900"
      />
    </div>
  );
}
