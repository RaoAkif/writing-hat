import { View, Text } from "react-native";
import tw from "../../utils/tailwind";
import { COLORS } from "../../utils/constants";

const Card = ({ children }) => {
  return <View style={tw`bg-[${COLORS.bgWhite}] mb-2 elevation w-full p-1`}>{children}</View>;
};

export default Card;
