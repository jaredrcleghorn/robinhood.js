import chai from 'chai'
import { validate as uuidValidate } from 'uuid'
import Robinhood from '../lib'

chai.should()

describe('Robinhood', function() {
	describe('#generateDeviceToken', function() {
		it('should return a valid UUID', function() {
			return uuidValidate(Robinhood.generateDeviceToken()).should.be.true
		})
	})
})
