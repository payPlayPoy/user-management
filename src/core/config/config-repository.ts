import dotenv from 'dotenv';

dotenv.config();
export class ConfigRepository {
    public getConfig(key: string, defaultValue?: any): any {
        return process.env[key] || defaultValue;
    }
}