const memories = [
  {file:'memory-01.webp', date:'12 AUG 2024', caption:'A little us'},
  {file:'memory-02.webp', date:'12 AUG 2024', caption:'Cosy little moments'},
  {file:'memory-03.webp', date:'20 AUG 2024', caption:'That sparkle'},
  {file:'memory-04.webp', date:'30 AUG 2024', caption:'Close is my favourite place'},
  {file:'memory-05.webp', date:'31 AUG 2024', caption:'My day, made'},
  {file:'memory-06.webp', date:'31 AUG 2024', caption:'One more selfie'},
  {file:'memory-07.webp', date:'18 DEC 2024', caption:'A December memory'},
  {file:'memory-08.webp', date:'04 JAN 2025', caption:'A new year with you'},
  {file:'memory-09.webp', date:'21 JAN 2025', caption:'Even on a screen, us'},
  {file:'memory-10.webp', date:'13 JUL 2025', caption:'Little adventures'},
  {file:'memory-11.webp', date:'13 JUL 2025', caption:'My favourite company'},
  {file:'memory-12.webp', date:'18 JUL 2025', caption:'An evening with you'},
  {file:'memory-13.webp', date:'17 AUG 2025', caption:'A day worth keeping'},
  {file:'memory-14.webp', date:'22 AUG 2025', caption:'Just the two of us'},
  {file:'memory-15.webp', date:'23 AUG 2025', caption:'A hug to remember'},
  {file:'memory-16.webp', date:'09 DEC 2025', caption:'A celebration of you'},
  {file:'memory-17.webp', date:'16 FEB 2026', caption:'Still my favourite view'},
  {file:'memory-18.webp', date:'16 FEB 2026', caption:'Every colour, with you'},
  {file:'memory-19.webp', date:'18 JUL 2026', caption:'Another page of us'},
  {file:'memory-20.webp', date:'A FAVOURITE DAY', caption:'One beautiful day'}
];

const reasons = [
  {icon:'✿', title:'Tum bahot bahot bahot sundar ho', body:'Bahot bahot bahot bahot bahot bahot sundar ho — obviously. Iske liye mujhe koi explanation dene ki zaroorat hi nahi hai. Tum ho hi itni sundar.'},
  {icon:'♡', title:'Tum mera bahot care karti ho', body:'Mujhe jab bhi kuch chahiye hota hai, tum laake deti ho. Bina bole order kar deti ho. Bimar ya thake hote hain toh bahot care karti ho — jab bhi possible ho. Tumhari ye chhoti-chhoti caring things mere liye bahot matter karti hain.'},
  {icon:'☁', title:'Tum mujhe bina bole samajh jaati ho', body:'Mera thoda sa bhi mood change hota hai toh tum turant samajh jaati ho. Mujhe kuch explain bhi nahi karna padta — tum bina bole sab samajh jaati ho.'},
  {icon:'✧', title:'Tum bahot trustworthy ho', body:'Obviously. Tum mujhe sab kuch batati ho, jo bhi hota hai. Tumhare saath woh trust aur comfort feel hota hai jo mere liye bahot special hai.'},
  {icon:'♡', title:'Tum apna pura time deti ho', body:'Kitni bhi busy ho, mujhe message karna nahi bhoolti. Tum apne din mein mere liye time nikaalti ho, and I never take that for granted.'},
  {icon:'☎', title:'Tum hamesha mujhe prioritise karti ho', body:'Chahe kahin bhi ho, kisi ke bhi saath ho, mera call ya message aate hi reply karti ho — and turant call karti ho. It makes me feel important in your life.'},
  {icon:'❀', title:'Tum bahot reliable ho', body:'Koi bhi situation ho, tum hamesha mujhe samajhti ho aur mera dhyaan rakhti ho. I know I can count on you, and that feeling means everything.'},
  {icon:'☀', title:'Tum meri taakat ho', body:'Tum hamesha har cheez mein mujhe motivate karti ho — kaam mein, aur life mein bhi. Jab kabhi mujhe push chahiye hota hai, tum meri strength ban jaati ho.'},
  {icon:'♡', title:'Tum mujhe unconditionally accept karti ho', body:'Meri infinite galtiyon ko nazarandaaz karke mujhe pyaar karti ho. You accept me as I am, even on my not-so-perfect days, and I hope I make you feel just as accepted.'},
  {icon:'☻', title:'Tumhare saath hamesha khushi rehti hai', body:'Har kaam mein — chahe kuch dekhna ho, kuch khelna ho ya kuch khana ho — tumhare saath hamesha happiness rehta hai. Ordinary things bhi special lagti hain.'},
  {icon:'♫', title:'Hamare beech ki chemistry', body:'Kabhi koi gaana gaana ho, reels ya video banana ho, sab match karta hai. Hamari chemistry itni natural hai — jaise hum dono ek hi wavelength pe hain.'},
  {icon:'❥', title:'Tum meri respect karti ho', body:'Kisi aur ko ya kisi ke saamne mere baare mein bura nahi bolti. Tum jis tarah meri respect karti ho, woh mere liye bahot important hai.'}
];

// Build the photo gallery from the 20 original photos, keeping it lightweight with WebP images.
const grid = document.getElementById('memoryGrid');
memories.forEach((memory,index)=>{
  const button=document.createElement('button');
  button.className='memory-item reveal';
  button.type='button';
  button.style.setProperty('--rotate',`${[-1.2,.8,-.5,1.1,-.8,.45][index%6]}deg`);
  button.setAttribute('aria-label',`Open memory ${index+1}: ${memory.caption}`);
  const img=document.createElement('img');
  img.src=`images/${memory.file}`;
  img.alt=memory.caption;
  img.loading='lazy';
  img.decoding='async';
  const caption=document.createElement('span');
  caption.className='memory-caption';
  caption.innerHTML=`<b>${memory.caption}</b><small>${memory.date}</small>`;
  button.append(img,caption);
  button.addEventListener('click',()=>openLightbox(index));
  grid.appendChild(button);
});

// Build the twelve personal reasons as expandable cards.
const reasonsGrid=document.getElementById('reasonsGrid');
reasons.forEach((reason,index)=>{
  const card=document.createElement('button');
  card.type='button';
  card.className='reason-card reveal';
  card.setAttribute('aria-expanded','false');
  card.innerHTML=`<span class="reason-top"><span class="reason-icon">${reason.icon}</span> reason ${String(index+1).padStart(2,'0')}</span><h3>${reason.title}</h3><p>${reason.body}</p><span class="reason-hint">tap to read my reason ↗</span>`;
  card.addEventListener('click',()=>{
    const willOpen=!card.classList.contains('expanded');
    card.classList.toggle('expanded',willOpen);
    card.setAttribute('aria-expanded',String(willOpen));
  });
  reasonsGrid.appendChild(card);
});

// Gentle reveal on scroll.
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  });
},{threshold:.12,rootMargin:'0px 0px -35px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Falling petals are deliberately sparse so the page stays smooth on phones.
const petalLayer=document.getElementById('petalLayer');
const petalSymbols=['✿','♡','❀','·'];
for(let i=0;i<17;i++){
  const petal=document.createElement('span');
  petal.className='petal';
  petal.textContent=petalSymbols[i%petalSymbols.length];
  petal.style.left=`${Math.random()*100}%`;
  petal.style.fontSize=`${10+Math.random()*12}px`;
  petal.style.animationDuration=`${14+Math.random()*18}s`;
  petal.style.animationDelay=`${-Math.random()*28}s`;
  petal.style.setProperty('--drift',`${-80+Math.random()*160}px`);
  petalLayer.appendChild(petal);
}

// Countdown uses India Standard Time and the 21 November 2026 meeting date.
const countdownTarget=new Date('2026-11-21T00:00:00+05:30').getTime();
function updateCountdown(){
  let diff=countdownTarget-Date.now();
  const message=document.getElementById('countdownMessage');
  if(diff<=0){
    ['days','hours','minutes','seconds'].forEach(id=>document.getElementById(id).textContent='00');
    message.textContent='Today is the day. I finally get to see you, Buuuuu! ♡';
    return;
  }
  const days=Math.floor(diff/86400000); diff%=86400000;
  const hours=Math.floor(diff/3600000); diff%=3600000;
  const minutes=Math.floor(diff/60000); const seconds=Math.floor((diff%60000)/1000);
  document.getElementById('days').textContent=String(days).padStart(2,'0');
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);

// Scroll progress.
const progress=document.getElementById('scrollProgress');
function updateProgress(){
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`;
}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();

// Photo lightbox with keyboard support and previous/next controls.
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
const lightboxCaption=document.getElementById('lightboxCaption');
let currentPhoto=0;
function showPhoto(index){
  currentPhoto=(index+memories.length)%memories.length;
  const item=memories[currentPhoto];
  lightboxImage.src=`images/${item.file}`;
  lightboxImage.alt=item.caption;
  lightboxCaption.textContent=`${item.caption} · ${item.date}`;
}
function openLightbox(index){showPhoto(index);lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');document.getElementById('lightboxClose').focus();}
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
document.getElementById('lightboxClose').addEventListener('click',closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click',()=>showPhoto(currentPhoto-1));
document.getElementById('lightboxNext').addEventListener('click',()=>showPhoto(currentPhoto+1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});

// The final secret is a small modal, with a soft heart burst.
const secretModal=document.getElementById('secretModal');
function openSecret(){secretModal.classList.add('open');secretModal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');heartBurst();document.getElementById('modalClose').focus();}
function closeSecret(){secretModal.classList.remove('open');secretModal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
document.getElementById('secretButton').addEventListener('click',openSecret);
document.getElementById('modalClose').addEventListener('click',closeSecret);
document.getElementById('secretDone').addEventListener('click',closeSecret);
secretModal.addEventListener('click',e=>{if(e.target===secretModal)closeSecret();});
function heartBurst(){
  for(let i=0;i<18;i++){
    const el=document.createElement('span');el.textContent=i%3===0?'♡':'✿';
    el.style.cssText=`position:fixed;z-index:120;left:${42+Math.random()*16}%;top:${45+Math.random()*12}%;font-size:${13+Math.random()*18}px;color:#e69ab0;pointer-events:none;transition:transform 1.3s ease,opacity 1.3s ease;`;
    document.body.appendChild(el);
    requestAnimationFrame(()=>{el.style.transform=`translate(${(Math.random()-.5)*350}px,${-100-Math.random()*230}px) rotate(${Math.random()*90-45}deg)`;el.style.opacity='0';});
    setTimeout(()=>el.remove(),1400);
  }
}

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeLightbox();closeSecret();}
  if(lightbox.classList.contains('open')){
    if(e.key==='ArrowRight')showPhoto(currentPhoto+1);
    if(e.key==='ArrowLeft')showPhoto(currentPhoto-1);
  }
});
