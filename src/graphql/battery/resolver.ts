import {Battery, updateBatteryParams} from "src/models";
import {
    updateBattery as updateBatteryResolver,
    getBatteryList as getBatteryListResolver
} from '../../controllers/battery'

module.exports = {
    updateBattery: async (params: updateBatteryParams): Promise<Battery | null> => {
        return await updateBatteryResolver(params)
    },
    getBatteryList: async (): Promise<Battery[]> => {
        return await getBatteryListResolver()
    }
}
