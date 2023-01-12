import React from "react";
import { useCallback, useRef } from "react";
import { CursorPointer } from "../styles/components/layout";

export type Ref<T = any> = React.MutableRefObject<T>;

export function useRefs(): [Ref<Record<string, Ref>>, (refName: string) => (ref: Ref) => void] {
  const refs = useRef<Record<string, Ref>>({});

  const register = useCallback((refName: string) => (ref: Ref) => {
    refs.current[refName] = ref;
  }, []);

  return [refs, register];
}

interface IScrollTo {
  children: any;
  refs: Ref<Record<string, Ref>>;
  refName: string;
}

export const ScrollTo = ({children, refs, refName}: IScrollTo) => {
  const onClick = React.useCallback(() => {
    (refs.current?.[refName] as any)?.scrollIntoView({behavior:'smooth'});
  }, [refs, refName])

  return <CursorPointer onClick={onClick}>{children}</CursorPointer>
}
