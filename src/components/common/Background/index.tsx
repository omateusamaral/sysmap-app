import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { theme } from "../../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
};
export default function Background({ children }: Props) {
  const { secondary100, secondary90 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary90, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
