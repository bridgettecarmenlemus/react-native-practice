import React, {useState} from 'react';
import { Button, Text, StyleSheet } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
        <Text style={styles.medText}
        >Counter: {count}</Text>
        <Button  
        title={"Count + 1"}
        onPress={() => setCount
        (count +1)} 
        color='darksalmon'
        accessibilityLabel="count + 1 " />
        </>
    )
}

const styles = StyleSheet.create({
    medText: {
        fontSize: 24,
        margin: 16
    }
})