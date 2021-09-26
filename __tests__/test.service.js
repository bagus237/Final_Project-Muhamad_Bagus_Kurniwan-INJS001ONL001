const request = require("supertest");
const exect = require('../index');

const getSpy = jest.fn();

jest.doMock('express', () => {
    return {
        Router() {
            return {
                get: getSpy,
            };
        }
    };
});

describe("Test todo methods", () => {
 
    it("should reeturn all todos", function (done) {
        await request(app)
        .get("/api/v1/users")
        .expect(200)
        .then((response) => {
            expect(response.body.length).toBe(3);
        });
        done();

        
    }); 
})


it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })

  describe('should test server configuration', () => {
    test('should use router', () => {
        require('../index');
        expect(useSpy).toHaveBeenCalledWith(router);
    });

  it('should have a statuscode 201', async done => {
      const res = await request.post('/api/v1/users')
      expect(res.status).toBe(200)
      done()
    })
    
  });

