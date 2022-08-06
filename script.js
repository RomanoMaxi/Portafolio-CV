                //********Menu*********** */
//esta va a ser una FUNCION ANONIMA EJECUTABLE, es decir que va a estar diseñada para volver a ser
//usada en cualquier otro proyecto y no tener problemas de elemtos y sintacsis.

//Primero creo código para que menú se cierre y se abra al tocar el svg
//creo la función anónima, con el parámetro d=document.
((d) => {
    //creo variable const (no cambia), para asignarle al boton
    //lamo al boton y al menu y les cambio el nombre, a los dos los hago variable
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    //método para registrar evento específico, en este caso, abrir el menu
    $btnMenu.addEventListener("click", (e) => {
        //llamo al primer elemento del del menu-btn que es el svg de tres barras y a la cruz
        //cambio o dejo la clase "none" con toggle
    $btnMenu.firstElementChild.classList.toggle("none");
      //el boton cruz ya tiene la clase "none"
    $btnMenu.lastElementChild.classList.toggle("none");
        //le cambio la class al menu para que aparezca, con css puse como aparece
    $menu.classList.toggle("is-active");

      //lo que necesito ahora que al hacer click a algún elemento del menu, este vuelva  a su clase anterior
      //esto lo hago con delegación de eventos
    d.addEventListener("click",(e) => {
          //si el evento que origino el click en el documento no es un enlace dentro del menu, retorno falso
        if(!e.target.matches(".menu a")) return false;

        //lo que hago es devolver las clases a sus valores originales
          $btnMenu.firstElementChild.classList.remove("none");
          $btnMenu.lastElementChild.classList.add("none");
          $menu.classList.remove("is-active");
      })
    });
})(document);

          //Contact Form//
// ((d) => {
//   const $form = d.querySelector(".contact-form"),
//     $loader = d.querySelector(".contact-form-loader"),
//     $response = d.querySelector(".contact-form-response");

//   $form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     $loader.classList.remove("none");
//     fetch("https://formsubmit.co/ajax/maximilianoagustinromano@gmail.com", {
//       method: "POST",
//       body: new FormData(e.target),
//     })
//       .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//       .then((json) => {
//         console.log(json);
//         location.hash = "#gracias";
//         $form.reset();
//       })
//       .catch((err) => {
//         console.log(err);
//         let message =
//           err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
//         $response.querySelector(
//           "h3"
//         ).innerHTML = `Error ${err.status}: ${message}`;
//       })
//       .finally(() => {
//         $loader.classList.add("none");
//         setTimeout(() => {
//           location.hash = "#close";
//         }, 3000);
//       });
//   });
// })(document);

//cuidado que esto lo puede mandar a span

