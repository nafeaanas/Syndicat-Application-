const request = require('supertest');
const app = require('../server')

////test unit for Auth
/// test unit for login 
describe("POST /api/auth/login", () => {
    //when email and password is missing
    it("should be provide an email and password after login", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: 'nafeaanass15@gmail.com',
            password:""
        });
        expect(res.statusCode).toBe(400);
    });

    // //incorrect password
    it('should be not login because incorrect password ', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email:"nafeaanass20@gmail.com",
            password: "azerty"
        });
        expect(res.statusCode).toBe(402);
    });


    //email not verified
    it("should be not login because email not verified", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: "nafeaanass20@gmail.com",
            password: "youssef123",
        });
        expect(res.statusCode).toBe(401);
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
            email: "nafeaanass00@gmail.com" ,
            password: "youssef123"
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
            email:'nafeaanass00@gmail.com',
            password:'youssef123'
        })
        expect(res.statusCode).toBe(400);    
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
                const res = await request(app).post('/api/auth/resetpassword/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFuYXNzc3MiLCJpYXQiOjE2NzI5MzA5OTIsImV4cCI6MTY3MjkzMTg5Mn0.cwJe9b321K9uwQMjGYHHWWfWY4UN_6bfGV25Jx-ehd0').send({
                password:"",
                password2:""
        })
        expect(res.statusCode).toBe(400)
    })

})


////test unit for CRUD
describe("Get /api/client", () => {
/// test unit for findAll client  

    //findAll seccufuly
    it("should be findAll seccufuly", async () => {
        const res = await request(app).get("/api/client")
        expect(res.statusCode).toBe(200);
    });


/// test unit for findOne client  

    //findOne seccufuly
    it("should be findOne seccufuly", async () => {
        const res = await (await request(app).get("/api/client/63b6a96bb54c8b1673866995"))
        expect(res.statusCode).toBe(200);
    });
})
/// test unit for Create client 
describe("POST /api/client/create", () => {

    //when name and email and cin and phone is missing
    it("should be provide email est vide", async () => {
        const res = await request(app).post("/api/client/create").send({
            name: 'moslim' ,
            // email:'',
            cin:'ha1876',
            phone:'06876878836'
        });
        expect(res.statusCode).toBe(400);
    });

//     //when client already exist
    it('should be not create because client already exist', async () => {
        const res = await request(app).post("/api/client/create").send({
            name: "anas",
            email: "nafeaanss100@gmail.com",
            cin: "AH666",
            phone: "845856"
        })
        expect(res.statusCode).toBe(500);    
    })
    
//     //create seccufuly
    it("should be create seccufuly", async () => {
        const res = await request(app).post("/api/client/create").send({
            name: "modjjdddslimjg",
            email: "nakdjhhgjyhthrtt@gmail.com",
            cin: "ha55ukihtryhrtu",
            phone: "8356765755435436"
        });
        expect(res.statusCode).toBe(200);
    });

})

/// test unit for update client 
describe("patch /api/client/update", () => {
    
//     //client not exist
    it("should be not update because client not exist", async () => {
        const res = await request(app).patch("/api/client/update/63b6a96bb54c8b1673866976").send({
            name: "new",
            email: "nafeaanss100@gmail.com",
            cin: "AH666",
            phone: "845856"  
        })
        expect(res.statusCode).toBe(404);
    })
    
//     //update seccufuly
    it("should be update seccufuly", async () => {
        const res = await request(app).patch("/api/client/update/63b6dcbd5efef19c54b2480e").send({
            name: "nessw",
            email: "nakdksfea400@gmail.com",
            cin: "AH6ksk66",
            phone: "8878sj6786889"
        });
        expect(res.statusCode).toBe(200);
    });

})

/// test unit for delete client  
describe("delete /api/client", () => {

    //delete seccufuly
    it("should be delete seccufuly", async () => {
        const res = await (await request(app).delete("/api/client/delete/63c41343e47e3754dcf9b84e"))
        expect(res.statusCode).toBe(200);
    });

    //client not exist
    it("should be not delete because client not exist", async () => {
        const res = await request(app).get("/api/client/delete/63b6a96bb54c8b1673866976")
        expect(res.statusCode).toBe(404);
    })
})
