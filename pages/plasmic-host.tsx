import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';
import { HelloWorld } from "@/components/HelloWorld";
import { WorkSlider } from "@/components/WorkSlider.jsx";

PLASMIC.registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    className: 'string',
    verbose: 'boolean'
  },
  importPath: './components/HelloWorld',
})

PLASMIC.registerComponent(WorkSlider, {
  name: "WorkSlider",
  props: {
    className: 'string',
  },
  importPath: './components/WorkSlider',
});

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
