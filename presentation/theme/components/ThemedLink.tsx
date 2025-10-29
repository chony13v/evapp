import { Link } from 'expo-router';
import type { ComponentProps } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

type LinkNativeProps = ComponentProps<typeof Link>;
type Props = Omit<LinkNativeProps, 'style'> & { style?: StyleProp<TextStyle> };

const ThemedLink = ({ style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Link
      style={[{ color: primaryColor }, style]}
      {...rest}          // aquí TS ya sabe que 'href' es requerido
    />
  );
};

export default ThemedLink;
