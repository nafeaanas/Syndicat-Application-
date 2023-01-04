const request = require('supertest');
const app = require('../server')


/// test unit for login 
describe("POST /api/auth/login", () => {
    //when email and password is missing
    it("should be provide an email and password after login", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: 'nafeaanass15@gmail.com' ,
        });
        expect(res.statusCode).toBe(400);
    });

    // //incorrect password
    it('should be not login because incorrect password ', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email:"nafeaanass15@gmail.com", password: "azerty"
        });
        expect(res.statusCode).toBe(403);
    });


    //email not verified
    it("should be not login because email not verified", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: "nafeaanass20@gmail.com",
            password: "123",
        });
        expect(res.statusCode).toBe(400);
    });

    //user not exist
    it("should be not login because not user exist", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: "test@gmail.com",
            password: "123",   
        })
        expect(res.statusCode).toBe(402);
    })
    
    //login seccufuly
    it("should be login seccufuly", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: "nafeaanass15@gmail.com" ,
            password: "chemaia1"
        });
        expect(res.statusCode).toBe(200);
    });

})

/// test unit for register
describe("POST /api/auth/register", () => {

    //when name and email and password is missing
    it('should be provide an name and email and password after register', async () => {
        const res = await request(app).post("/api/auth/register").send({
            name:'',
            email: 'nafeaanass15@gmail.com' ,
            password: ''
        });
        expect(res.statusCode).toBe(400);
    })
    //when email already exist
    it('should be not register because email already exist', async () => {
        const res = await request(app).post("/api/auth/register").send({
            name:'Anas',
            email:'nafeaanass15@gmail.com',
            password:'chemaia1'
        })
        expect(res.statusCode).toBe(409);    
    })
        
})

///test unit for forgot password
describe("POST /api/auth/forgetpassword", () => {

    //when email is missing
    it('should be provide an email after forgot password', async () => {
        const res = await request(app).post('/api/auth/forgetpassword').send({
            email:""
        })
        expect(res.statusCode).toBe(400)
    })
    //when email is not exist
    it('should be not forgot because email not exist', async () => {
        const res = await request(app).post('/api/auth/forgetpassword').send({
            email:"anas@gmail.com"
        })
        expect(res.statusCode).toBe(402)
    })

})

///test unit for reset password
describe("POST /api/auth/resetpassword", () => {

    //when password is missing
    it('should be provide an password after reset password', async () => {
        const res = await request(app).post('/api/auth/resetpassword').send({
                password:"",
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTc5NTA2OTJmNDUxYzQ5YTgyZmNkZSIsImlhdCI6MTY2NjY4NDUyMiwiZXhwIjoxNjY2Njg1NDIyfQ.VR8Ctx5i_a4LDypF5gmwv45kojTTfO-dTHEgTpvjw4w"
        })
        expect(res.statusCode).toBe(400)
    })

})