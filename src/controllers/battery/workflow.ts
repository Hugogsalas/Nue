import {Battery, BatteryModel, updateBatteryParams} from '../../models';

export const updateBattery = async ({
  _id,
  name,
  Type,
  voltages,
}: updateBatteryParams): Promise<Battery | null> => {
  await BatteryModel.findByIdAndUpdate(_id, {name: name, Type: Type, voltages: voltages})

  const response = await BatteryModel.findById(_id)

  return response;
};

export const getBatteryList = async (): Promise<Battery[]> => {
  const result = await BatteryModel.find({});
  return result.map((r) => r.toObject())
}
