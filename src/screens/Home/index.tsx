import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
  const partipants = ['Rodrigo', 'Carlos', 'Roberto', 'Alonso', 'Julia', 'Mike', 'Ana', 'Carol', 'Rose', 'Roberta']

  function handleParticipantAdd() {
    if(partipants.includes("Rodrigo")) {
      return Alert.alert("Participante existe", "já existe um participante na lista com este nome.")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Participante removido da lista")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])    
  }

  return(
    <View style={styles.container}>
      <Text style={styles.textMain}>React Native</Text>
      <Text style={styles.text}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6b6b6b'
        />
         <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
         </TouchableOpacity>
      </View>
      
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={partipants}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione a sua lista de
          presença novos participantes.
          </Text>
        )} 
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />
    </View>
  );
}