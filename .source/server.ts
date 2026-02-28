// @ts-nocheck
import * as __fd_glob_4 from "../content/docs/text-stagger.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/mask-hover.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/keyboard.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/expandable-cards.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"expandable-cards.mdx": __fd_glob_0, "index.mdx": __fd_glob_1, "keyboard.mdx": __fd_glob_2, "mask-hover.mdx": __fd_glob_3, "text-stagger.mdx": __fd_glob_4, });