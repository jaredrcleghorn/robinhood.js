import { v4 as uuidv4 } from 'uuid'

export default class Robinhood {
	static generateDeviceToken() {
		return uuidv4()
	}
}
