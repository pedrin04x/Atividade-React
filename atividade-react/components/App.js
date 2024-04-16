import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Explorando Mundo </Text>
      
      <TextInput
        style={styles.input}
        placeholder='Buscar...'
      />

      <View style={styles.labels}>
        <TouchableOpacity style={styles.labelButton}>
          <Text style={styles.label}>Montanhas</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacer} />
        <TouchableOpacity style={styles.labelButton}>
          <Text style={styles.label}>Praias</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacer} />
        <TouchableOpacity style={styles.labelButton}>
          <Text style={styles.label}>Comidas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logos}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('/images/i1.jpg')}/>
          <Image style={styles.logo} source={require('/images/i4.jpg')}/>
          <Image style={styles.logo} source={require('/images/i7.jpg')}/>
        </View>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('/images/i2.jpg')}/>
          <Image style={styles.logo} source={require('/images/i5.jpg')}/>
          <Image style={styles.logo} source={require('/images/i8.jpg')}/>
        </View>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('/images/i3.jpg')}/>
          <Image style={styles.logo} source={require('/images/i6.jpg')}/>
          <Image style={styles.logo} source={require('/images/i9.jpg')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontFamily: 'Times New Roman',    
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    marginVertical: 24,
  },

  input: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: '80%',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
  },

  labels: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '10%',
    marginBottom: 30,
  },

  labelButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },

  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },

  buttonSpacer: {
    width: 125,
  },

  logos: {
    alignItems: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  logo: {
    height: 107,
    width: 200,
    marginHorizontal: 10,
  },
});
