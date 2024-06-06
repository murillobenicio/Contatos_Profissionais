import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {A} from"@expo/html-elements";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/social-midias.png')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/1.png')} style={styles.icon} />
          <A style={styles.text} href='https://wa.me/qr/OED2TZ7BSEZUD1'>Whatsapp</A>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/7.png')} style={styles.icon} />
          <A style={styles.text} href='https://www.linkedin.com/in/murillo-ben%C3%ADcio-ab5323312/'>Linkedin</A>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/8.png')} style={styles.icon} />
          <A style={styles.text} href='mailto:mubenicio.lima.21@gmail.com'>Email</A>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/2.png')} style={styles.icon} />
          <A style={styles.text} href='https://github.com/murillobenicio'>Github</A>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/3.png')} style={styles.icon} />
          <A style={styles.text} href='https://br.pinterest.com/mubeniciolima21/'>Pinterest</A>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/4.png')} style={styles.icon} />
          <A style={styles.text} href='tel:5518981593228'>Telefone</A>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/5.png')} style={styles.icon} />
          <A style={styles.text} href='https://www.instagram.com/munizzssx/'>Instagram</A>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/6.png')} style={styles.icon} />
          <A style={styles.text} href='https://x.com/Murillo98558276'>Twiter/X</A>
        </ThemedView>



      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    
  },
});