let skills = 
`{
  languages: ['Python', 'JavaScript', 'HTML', 'CSS', 'Java', 'C', 'C++', 'SQL', 'R', 'Rust', 'OCaml'],
  tech: ['React', 'Firebase', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Flask', 'AWS'],
  interests: ['full-stack development', 'design and UI/UX', 'cloud computing', 'learning!']
}`;

let interests = 
`I also enjoy:<br>
• Hiking<br>
• Music, and curating playlists <br>
• Jewelry making<br>
• Hitting the gym<br>
• Learning about birds<br>
• Playing Pokémon games<br>
• Watching TED Talks!<br>`;

document.getElementById("skills-list").innerHTML = skills;
document.getElementById("interests").innerHTML = interests; 
 

// The place I saw this effect:
// https://angle2.agency/

// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}