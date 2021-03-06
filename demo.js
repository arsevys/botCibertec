const googleAuth = require('google-oauth-jwt');

function generateAccessToken() {
 return new Promise((resolve) => {
  googleAuth.authenticate(
   {
    email: "andy-javier@ciberteccomunica-255fd.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDV0j12abqrHV4b\neZfx6+L6G4siRHjPNI3aLfQ5zJERANtLXussTxVQD8Bf2pHdqT2cHOfo6ZjOtaSX\nvF7r3DoxkeVoUff5lXooZYSUtHBOwa7oc3HJ/y6OzJAQUndcXRZNC8LZVuJipZ0J\n9+B1bi7l/UHaT1OY5gIg8+oNgIVACzhuYAbH8q9qptAKaal7jYWR8h8evx9Ph1PM\nBDF+7ULbIe/N5ukLUtZvtHldv3xPldcu6ZxiU/v22vzXWYdSu6cAYSE0D6ksAag5\nxs3VaL9rVqwFTcK1VBU0J3GHU1st6ufbk6giUI4yDfvw2s7Y7D9BToIdwzjsULRV\nkz06UxAFAgMBAAECggEABLKEcqZCeVFhGKHsdl5cA2oY/aT68XRiXGVvjNiDZFf8\nOVTpvjSzj2l1LLXox/GYnqYc6yc8mefwKHw1KqHRLncZztekJrnDsAEA72JiaDyF\niupEWO9v9qekT5N8N019OK6WNn+b5BZm04n8RqAnzBoq+PCOsdh1ugMZxHerFbvP\nEdcUpd2sZH/UProLvFCAJYYSkLnXL6bOw7QPdS2ZOrsIr4Iai3Vb3Ko6WHcn6nF7\nOamKgNBOkYMFYY0XsMfcFKRlXHFWUNkoIbb5aMGVD1bOXtvfsbAEme/l1hfHfy5/\nDwWwA/feaRtBmZasCSNOCxJj6+/nPV4bZ3E0/gTlQQKBgQD5Xwm3JbFSDlzDuC0E\nqfaj5vhC2ufJrpVy4UVbqpwsiIDeqtixyb1mbX7igF/VNBesFU6+QsN/TsFPDUr/\nZYf+Bb904CSyRhdD+CSkTSDXvU8osUSqnPw26su2NvgOJCkJy2/jVBQPyKhrzOuP\npRfR/GYWTAoDjfx885iweWU2RQKBgQDbgUknxQx3EU2xt8Ij7qnemKrPAngAD0a1\nTrR+ZN17ywDU8PNyO7BRjf7Sh5SpLdNPCUnB7AieHe1VrBnHYeE52SnI+9KlyM3m\nvw8A6BOpdfRcff/Wse6ko9zzMSFz5XDr+Sibe1qFQwE+BTbWVEOGaBTUfYSLsNwD\nivGgZ93uwQKBgQCpDenbNH1ioIP410oFqGehM7rIL/kE/Asq51cKzr2zXxLmYTIo\nTRjOcJqdWOQe+IK30XYhe8dm7fAU9HEMdTtdVW43AKFADk5FcNr+W59RQnCAqLRh\naa1+WWyi6d7+TztW/Yirt1smXCT5d+GV7xkX7SEUKpZ7VG2AE/BGavXXdQKBgQDI\nFQ7z21/DYNhrOE8UpcXdi1eXHm73zvTq63UHCTYCU0bM0111MQdFL6Opj8Bofcbx\nckvzIg2w4yKlRxywa337VwIJm9GlIGbfACTS9LiHbWdyr792mfYnyN3sJ0qQ9AF8\ndz8Witg2RJ9rQyF7OI/cgh8Kmecp1eqWqB4b0tGvgQKBgQCI9uxMgBiCPQjh7luA\n3oCYt21LO3UWenJYUruaiv/d5HQA5BsnOTP5EP7+Hc2jKsn2lP6iexeJPz/fqQLR\nUEIAwjjiUe/oBEsjAB4lsjLomGdenY1m2x0iIENT5Wnz56d3EQ8Ko1kyphs+esf/\nUSsbsfdvEwrJv16iBHULoRGDjA==\n-----END PRIVATE KEY-----\n",
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
   },
   (err, token) => {
	console.log(err,token);
    resolve(token);
   },
  );
 });
}

console.log(generateAccessToken());