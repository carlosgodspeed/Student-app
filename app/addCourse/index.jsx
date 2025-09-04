import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../../components/Shared/Button';
import { GenerateTopicsAIModel } from '../../config/AiModel';
import Colors from '../../constant/Colors';
import Prompt from '../../constant/Prompt';

export default function AddCourse() {
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState();
    const [topics,setTopics] = useState([]);
    const [selectedTopics,setSelectedTopics] = useState([]);
    const onGenerateTopic = async () => {
        setLoading(true);
        const PROMPT = userInput+Prompt.IDEA;
        const aiResp = await GenerateTopicsAIModel.sendMessage(PROMPT);
        const topicIdea = JSON.parse(aiResp.response.text());
        console.log(topicIdea);
        setTopics(topicIdea?.course_titles);
        setLoading(false);
    };
    const onTopicSelect = (topic) => {
        const isAlreadyExist = selectedTopics.find((item) => item === topic);
        if(!isAlreadyExist)
        {
            setSelectedTopics(prev => [...prev,topic])
        }
        else {
            const topics = selectedTopics.filter(item => item === topic);
            setSelectedTopics(topics);
        }
    }
    const isTopicSelected = (topic) => {
        const selection = selectedTopics.find(item => item === topic);
        return selection?true:false
    }
    const onGenerateCourse = () => {
        
    }
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
                onChangeText={(value)=>setUserInput(value)}
            />
            <Button
                text="Criar"
                type="outline"
                onPress={onGenerateTopic}
                loading={loading}
            />
            <View style={{
                marginTop:15,
                marginBottom:10,
            }}>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:15,
                }}>Selecione os tópicos que deseja adicionar</Text>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    gap:10,
                    marginTop:6,
                }}>
                    {topics.map((item,index)=>(
                        <Pressable key={index} onPress={() => onTopicSelect(item)}>
                            <Text style={{
                                padding:7,
                                borderWidth:0.4,
                                borderRadius:99,
                                paddingHorizontal:15,
                                backgroundColor:isTopicSelected(item)?Colors.PRIMARY:null,
                                color:isTopicSelected(item)?Colors.WHITE:Colors.PRIMARY,
                            }}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            {selectedTopics?.length>0&& <Button text = 'Gerar Curso'
                onPress={() => onGenerateCourse()}
                loading={loading}
            />}
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
