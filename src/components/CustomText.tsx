import { Text } from "react-native";

type Props = {
  children: JSX.Element | string | undefined;
  numberOfLines?: number;
  style?: object;
  weight: "bold" | "light" | "medium" | "regular" | "semiBold";
};

export const CustomText = ({
  children,
  numberOfLines,
  weight,
  style,
}: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        ...style,
        fontFamily:
          weight === "bold"
            ? "outfit-bold"
            : weight === "light"
              ? "outfit-light"
              : weight === "medium"
                ? "outfit-medium"
                : weight === "regular"
                  ? "outfit-regular"
                  : "outfit-semibold",
      }}
    >
      {children}
    </Text>
  );
};
