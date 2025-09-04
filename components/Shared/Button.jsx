import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constant/Colors';

export default function Button({ text, type = "fill", onPress, loading = false }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                padding: 15,
                width: '100%',
                borderRadius: 15,
                marginTop: 15,
                borderWidth: 2,
                borderColor: Colors.PRIMARY,
                backgroundColor: type === 'fill' ? Colors.PRIMARY : Colors.WHITE,
            }}
            disabled={loading}>
            {loading ? (
                <ActivityIndicator
                    size={'large'}
                    color={type === 'fill' ? Colors.WHITE : Colors.PRIMARY}
                />
            ) : (
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        color: type === 'fill' ? Colors.WHITE : Colors.PRIMARY,
                    }}
                >
                    {text}
                </Text>
            )}
        </TouchableOpacity>
    );
}
