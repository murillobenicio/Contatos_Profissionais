import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-paralax.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Bem vindo ao          Egg Social!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">O app Egg Social é um aplicativo com o objetivo de simplificar o acesso as redes sociais do dev
            criador deste aplicativo.
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <Image source={require('@/assets/images/eu.jpeg')} style={styles.icon} />
      <ThemedView style={styles.textoContainer}>
        <ThemedText type="defaultSemiBold">
          Sou Murillo Benício, aluno da ETEC Miltton Gazzetti de Presidente Vensceslau.
          Professor: Graziani Zanfolin.
          Meu número de telefone é: 18 98159-3228
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Próxima página:</ThemedText>
        </ThemedView>
        <ThemedView style={styles.textoContainer}>
        <ThemedText type="defaultSemiBold">
          Lá estara todas as redes sociais na qual o interessado pode entrar em contato.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    height: 300,
    width: 420,
    bottom: -40,
    left: -30,
    position: 'absolute',
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    height:150,
    width:110,
    alignSelf:'center',
  }
});