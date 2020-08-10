var should = require('should')
var reverseData = require('../reverseData')

describe('Reverse Data', () => {
    it('Should return reverse object data', done => {
        let result = JSON.stringify(reverseData({
            hired: {
                be: {
                    to: {
                        deserve: 'I',
                    },
                },
            },
        }))
        result.should.equal(JSON.stringify({
            I: {
                deserve: {
                    to: {
                        be: 'hired'
                    }
                }
            }
        }))
        done()
    })
    it('Should return empty string when input data not object', done => {
        let result = reverseData([1,2,3,4,5])
        result.should.equal("")
        done()
    })
    it('Should return empty string when input data object\'s key not equal 1', done => {
        let result = reverseData({ a1: { b1: 'b1', b2: 'b2' } })
        result.should.equal("")
        done()
    })
})