import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link className="text-slate300 text-center text-base font-body" {...rest}>
      {title}
    </Link>
  );
}
