import { clsx } from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      className={clsx(
        "bg-slate px-4 justify-center rounded-md h-10",
        isSelected && "border-2 border-lime"
      )}
      {...rest}
    >
      <Text className="text-quaternary font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
