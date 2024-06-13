import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
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
        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://wa.me/qr/OED2TZ7BSEZUD1")}}>
        <Image source={require('@/assets/images/1.png')} style={styles.icon} />
        <A style={styles.text} href='https://wa.me/qr/OED2TZ7BSEZUD1'>Whatsapp</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://www.linkedin.com/in/murillo-ben%C3%ADcio-ab5323312/")}}>
        <Image source={require('@/assets/images/7.png')} style={styles.icon} />
        <A style={styles.text} href='https://www.linkedin.com/in/murillo-ben%C3%ADcio-ab5323312/'>Linkedin</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("mailto:mubenicio.lima.21@gmail.com")}}>
        <Image source={require('@/assets/images/8.png')} style={styles.icon} />
        <A style={styles.text} href='mailto:mubenicio.lima.21@gmail.com'>Email</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://github.com/murillobenicio")}}>
        <Image source={require('@/assets/images/2.png')} style={styles.icon} />
        <A style={styles.text} href='https://github.com/murillobenicio'>Github</A>
        </Pressable>

      <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://br.pinterest.com/mubeniciolima21")}}>
        <Image source={require('@/assets/images/3.png')} style={styles.icon} />
        <A style={styles.text} href='https://br.pinterest.com/mubeniciolima21/'>Pinterest</A>
        </Pressable>
          
        <Pressable style={styles.redes} onPress={() => {Linking.openURL("tel:5518981593228")}}>
        <Image source={require('@/assets/images/4.png')} style={styles.icon} />
        <A style={styles.text} href='tel:5518981593228'>Telefone</A>
        </Pressable>
        
        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://www.instagram.com/munizzssx/")}}>
        <Image source={require('@/assets/images/5.png')} style={styles.icon} />
        <A style={styles.text} href='https://www.instagram.com/munizzssx/'>Instagram</A>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => {Linking.openURL("https://x.com/Murillo98558276")}}>
        <Image source={require('@/assets/images/6.png')} style={styles.icon} />
        <A style={styles.text} href='https://x.com/Murillo98558276'>Twiter/X</A>
        </Pressable>



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
    textAlign:'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    width: 300,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color:'black'
    
  },
});