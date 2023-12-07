let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #572364;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #572364;">Estoy iniciando en el mundo de la programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
