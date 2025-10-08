import { faker } from "@faker-js/faker/locale/es";

class UserGenerator {
  generateRandomUserUpdateData() {
    return {
      name: faker.firstName(),
      email: faker.internet.email(),
    };
  }

  // Generar username independiente
  generateUsername() {
    // generar un username que no contenga números
    let username = faker.internet.userName().replace(/\d+/g, '');
    // si queda muy corto o vacío, construir a partir de nombre y apellido
    if (!username || username.length < 4) {
      username = `${faker.firstName()}${faker.lastName()}`.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ]/g, '');
    }
    return username.toLowerCase();
  }

  // Generar password independiente
  generatePassword() {
    // generar contraseña compleja con longitud mínima
    return faker.internet.password(10, false, /[A-Za-z0-9]/, "!A1");
  }
}

export default UserGenerator;
