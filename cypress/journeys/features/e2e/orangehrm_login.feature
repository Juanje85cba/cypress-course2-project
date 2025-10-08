Feature: OrangeHRM - Login

  @Frontend @Example @OR-1
  Scenario: Login exitoso en OrangeHRM
    Given el usuario abre la pagina de OrangeHRM
    When ingresa el usuario "Admin" en OrangeHRM
    And ingresa la contraseña "admin123" en OrangeHRM
    And el usuario hace clic en el boton de login en OrangeHRM
    Then el sistema muestra el dashboard de usuario en OrangeHRM

  @Frontend @Example @OR-2
  Scenario: Login con usuario aleatorio inválido
    Given el usuario abre la pagina de OrangeHRM
    When ingresa el usuario "RANDOM_USER" en OrangeHRM
    And ingresa la contraseña "admin123" en OrangeHRM
    And el usuario hace clic en el boton de login en OrangeHRM
    Then el sistema muestra un mensaje de error de login en OrangeHRM

  @Frontend @Example @OR-3
  Scenario: Login con contraseña aleatoria inválida
    Given el usuario abre la pagina de OrangeHRM
    When ingresa el usuario "Admin" en OrangeHRM
    And ingresa la contraseña "RANDOM_PASS" en OrangeHRM
    And el usuario hace clic en el boton de login en OrangeHRM
    Then el sistema muestra un mensaje de error de login en OrangeHRM
