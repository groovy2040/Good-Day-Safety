export default function Button({ label, onPress}) {
      return (
        <View>
          /* ...rest of the code remains same */
          <Pressable
            style={[styles.button, { backgroundColor: '#fff' }]}
            onPress={onPress}
          />
        </View>
      );
    }
  