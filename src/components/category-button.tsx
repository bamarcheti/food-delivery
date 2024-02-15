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
        "bg-slate800 px-4 justify-center rounded-md h-10",
        isSelected && "border-2 border-lime300"
      )}
      {...rest}
    >
      <Text className="text-slate100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
