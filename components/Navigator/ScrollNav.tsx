import { generateKey } from "../../util";
import { Ref, ScrollTo } from "../../util/hooks";
import { PageItem } from "./const";

interface ScrollNavPros {
  refs: Ref<Record<string, Ref>>;
  pageItems: PageItem[];
  className?: string;
}

export const ScrollNav = ({ refs, pageItems, className = '' }: ScrollNavPros) => {
  return (
    <div className={className}>
      {generateKey(pageItems).map(it =>
        <ScrollTo key={it.key} refs={refs} refName={it.refName}>{it.name}</ScrollTo> )}
    </div>
  )
};
