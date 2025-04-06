const request = require('supertest')
import fixtures from '../../../fixtures/fixtures.js'
import GetRandomNumber from '../../../utils/utils.js'


describe('01 - Random cat fact tests schenario', () => {
    const endpoint = "/fact"
    const status_coode_success = 200
    const status_code_not_found = 404
    
    it('01.01 - Return a random cat fact with success', async () => {       
        const response = await request(fixtures.base_url)
            .get(endpoint)

        expect(response.status).toEqual(status_coode_success)
        expect(response.body).toHaveProperty("fact")
        expect(response.body).toHaveProperty("length")
    })

    it('01.02 - Return a random cat fact under the max length limit', async () => {
        const max_length = GetRandomNumber.GetRandomNumber()

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_coode_success)
            expect(response.body).toHaveProperty("fact")
            expect(response.body).toHaveProperty("length")
            expect(response.body.length).toBeLessThanOrEqual(max_length)
    })

    it('01.03 - Return fail when max length limit has negative value', async () => {
        const max_length = -100

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
    })

    it('01.04 - Return fail when max length limit has text value', async () => {
        const max_length = "test"

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
    })

    it('01.05 - Return fail when max length limit has zero value', async () => {
        const max_length = 0

        const response = await request(fixtures.base_url)
            .get(`${endpoint}?max_length=${max_length}`)

            expect(response.status).toEqual(status_code_not_found)
    })
})