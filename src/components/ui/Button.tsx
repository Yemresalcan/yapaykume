import { cn } from "@/lib/utils";

const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="animated-wrapper !rounded-full">
      <button
        className={cn(
          "bg-dark text-regular rounded-full px-4 py-1.5 text-sm font-medium hover:brightness-150 active:brightness-75",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
