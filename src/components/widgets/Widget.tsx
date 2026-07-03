import type { ReactNode } from "react";

import Card from "../ui/Card";

type WidgetProps = {
  children: ReactNode;
  className?: string;
};

function Widget({ children, className = "" }: WidgetProps) {
  return (
    <Card className={`h-full ${className}`}>
      {children}
    </Card>
  );
}

export default Widget;