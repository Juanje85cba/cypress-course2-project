Feature: JSONPlaceholder API

  @API @JSONPlaceholder @GET_POST
  Scenario: Obtener lista de posts
    Given la API de jsonplaceholder está disponible
    When realiza una solicitud GET a "/posts"
    Then la respuesta tiene código 200
    And la respuesta contiene una lista de posts

  @API @JSONPlaceholder @GET_COMMENTS
  Scenario: Obtener comentarios del post 1
    Given la API de jsonplaceholder está disponible
    When realiza una solicitud GET a "/posts/1/comments"
    Then la respuesta tiene código 200
    And la respuesta contiene una lista de comentarios

  @API @JSONPlaceholder @GET_POST_BY_ID
  Scenario: Obtener un post por id
    Given la API de jsonplaceholder está disponible
    When realiza una solicitud GET a "/posts/1"
    Then la respuesta tiene código 200
    And la respuesta contiene un objeto con id 1

 
