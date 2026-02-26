// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/expandable-cards.mdx": () => import("../content/docs/components/expandable-cards.mdx?collection=docs"), "components/mask-hover.mdx": () => import("../content/docs/components/mask-hover.mdx?collection=docs"), "components/text-stagger.mdx": () => import("../content/docs/components/text-stagger.mdx?collection=docs"), }),
};
export default browserCollections;