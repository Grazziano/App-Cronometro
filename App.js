import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')} />

      <Text style={styles.timer}>00:00:00</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>VAI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>Último tempo 00:03:50</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AEEF',
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AEEF',
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    color: '#FFF',
    fontStyle: 'italic',
  },
});
