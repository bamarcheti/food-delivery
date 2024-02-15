import { formatCurrency } from "@/utils/functions/format-currency";
import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
  price: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4"
        {...rest}
      >
        <Image
          source={data.thumbnail}
          className="w-[110px] h-[110px] rounded-md"
        />

        <View className="flex-1 ml-3">
          <View className="flex-row items-center">
            <Text className="text-slate100 font-subtitle text-base flex-1">
              {data.title}
            </Text>

            {data.quantity && (
              <Text className="text-secondary font-subtitle text-sm">
                x {data.quantity}
              </Text>
            )}
          </View>

          <Text className="text-secondary text-xs leading-5 mt-0.5">
            {data.description}
          </Text>

          <Text className="text-lime300 text-xs leading-5 mt-0.5">
            {formatCurrency(data.price)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
