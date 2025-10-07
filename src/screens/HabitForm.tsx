import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { Metric, PostHabit } from "../types/habit"
import { Picker } from "@react-native-picker/picker";
import { createHabit } from "../services/habitService";

const HabitForm = () => {

  const [habit, setHabit] = useState<PostHabit>({
    name: "",
    metric: Metric.Pages
  });

  const handleSubmit = async () => {
    createHabit(habit);
  }

  return (
    <View>
      <Text>Habit:</Text>
      <TextInput
        placeholder="habit name"
        value={habit.name}
        onChangeText={(text) => setHabit((prev) => ({...prev, name: text }))}
      />

      <Text>Metric:</Text>
      <Picker
        style={{ width: 200 }}
        selectedValue={habit.metric}
        onValueChange={(value, index) => setHabit((prev) => ({...prev, metric: value}))}
      >
        {Object.entries(Metric).map(([key, value]) => (
          <Picker.Item key={key} value={value} label={key} />
        ))}
      </Picker>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

export default HabitForm