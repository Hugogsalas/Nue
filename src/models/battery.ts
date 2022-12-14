import {Schema, model} from 'mongoose';
export interface Battery {
    _id: string;
    name: string;
    Type: string;
    voltages: number[];
}

const schema = new Schema<Battery>({
    name: {type: String, required: true},
    Type: {type: String, required: true},
    voltages: {type: [Number], required: true},
})

export const BatteryModel = model<Battery>('Battery', schema)

export interface updateBatteryParams {
    _id: string;
    name?: string;
    Type?: string;
    voltages?: number[];
}
