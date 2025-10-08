Feature: JSONPlaceholder API - Login flows

  @API @JSONPlaceholder @LOGIN
  Scenario: Simular login creando un post (POST /posts)
    Given la API de jsonplaceholder está disponible
    When realiza una solicitud POST a "/posts" con body:
      | title  | login attempt |
      | body   | attempt body  |
      | userId | 1             |
    Then la respuesta tiene código 201
    And la respuesta contiene las propiedades title, body y userId

  @API @JSONPlaceholder @LOGIN_SEARCH
  Scenario: Buscar usuario por username (GET /users?username=Bret)
    Given la API de jsonplaceholder está disponible
    When realiza una solicitud GET a "/users?username=Bret"
    Then la respuesta tiene código 200
    And la respuesta contiene una lista de posts
