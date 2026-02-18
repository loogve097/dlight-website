import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** セクションとして使用する場合のID */
  id?: string;
};

/** コンテンツ幅制限コンテナ */
export default function Container({ children, className, id }: Props) {
  return (
    <div
      id={id}
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}
