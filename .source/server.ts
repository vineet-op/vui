// @ts-nocheck
import * as __fd_glob_3 from "../content/docs/components/text-stagger.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/mask-hover.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/components/expandable-cards.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"index.mdx": __fd_glob_0, "components/expandable-cards.mdx": __fd_glob_1, "components/mask-hover.mdx": __fd_glob_2, "components/text-stagger.mdx": __fd_glob_3, });