import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemovebyGroup(playerName: string, group: string) {
  try {
    const storage = playersGetByGroup(group);
    const filtered = (await storage).filter(player => player.name !== playerName)
    const players = JSON.stringify(filtered);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
}