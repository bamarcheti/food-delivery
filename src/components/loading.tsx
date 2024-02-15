import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <ActivityIndicator color={colors.white} />
    </View>
  );
}
