// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"expandable-cards.mdx": () => import("../content/docs/expandable-cards.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "keyboard.mdx": () => import("../content/docs/keyboard.mdx?collection=docs"), "mask-hover.mdx": () => import("../content/docs/mask-hover.mdx?collection=docs"), "text-stagger.mdx": () => import("../content/docs/text-stagger.mdx?collection=docs"), }),
};
export default browserCollections;