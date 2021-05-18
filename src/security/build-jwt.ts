const jwtPlugin = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

class CreateJwt {
  public generateJWTEncrypted(documentNumber: String, transactionId: String) {
    const privateKey = process.env.KEY_JWT;
    const uuid = uuidv4();
    const jwtData = {
      privateKey: privateKey,
      expiresIn: Number(process.env.TOKEN_TIME),
      payload: {
        jti: uuid,
        sub: "Wolox JWT Token",
        iss: "Wolox Project",
        documentNumber: documentNumber.toString(),
        transactionId: transactionId.toString(),
      },
    };
    const generatedJWT = jwtPlugin.sign(jwtData.payload, jwtData.privateKey, {
      expiresIn: jwtData.expiresIn,
    });

    return generatedJWT;
  }
}

export const createJwt = new CreateJwt();
