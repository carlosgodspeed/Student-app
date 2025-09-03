import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../../components/Shared/Button';
import Colors from '../../constant/Colors';

export default function AddCourse() {
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState('');
    const onGenerateTopic = () => {
        setLoading(true);
        setTimeout(() => {
            console.log('Curso gerado:', course);
            setLoading(false);
        }, 2000);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Novo Curso</Text>
            <Text style={styles.subtitle}>O que você quer aprender hoje?</Text>
            <Text style={styles.description}>
                Qual curso você quer criar? (Exemplos: ReactJS, Marketing Digital, Mobile, UX/UI, Fotografia, IA, Conteúdo, Finanças)
            </Text>
            <TextInput
                placeholder="Digite o nome do curso"
                style={styles.TextInput}
                numberOfLines={3}
                multiline={true}
                value={course}
                onChangeText={setCourse}
            />
            <Button
                text="Generate"
                type="outline"
                onPress={onGenerateTopic}
                loading={loading}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 30,
    },
    subtitle: {
        fontFamily: 'outfit',
        fontSize: 20,
    },
    description: {
        fontFamily: 'outfit',
        fontSize: 14,
        marginTop: 10,
        color: Colors.GRAY,
    },
    TextInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        height: 100,
        marginTop: 10,
        fontSize: 18,
        textAlignVertical: 'top',
    },
});
