// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Random flicker effect for cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    setInterval(() => {
        if (Math.random() > 0.95) {
            card.style.opacity = '0.7';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 100);
        }
    }, 1000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 1s ease-out';
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
    // Random quotes for the about section
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
            author: "J.K. Rowling"
        },
        {
            text: "The purpose of a writer is to keep civilization from destroying itself.",
            author: "Albert Camus"
        },
        {
            text: "Writing is the painting of the voice.",
            author: "Voltaire"
        },
        {
            text: "A writer is someone for whom writing is more difficult than it is for other people.",
            author: "Thomas Mann"
        }
    ];

    // Function to update random quote
    function updateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        const quoteElement = document.querySelector('.random-quote');
        const authorElement = document.querySelector('.quote-author');
        
        if (quoteElement && authorElement) {
            quoteElement.textContent = `"${quote.text}"`;
            authorElement.textContent = `- ${quote.author}`;
        }
    }

    // Update quote initially and every 10 seconds
    updateRandomQuote();
    setInterval(updateRandomQuote, 10000);

    // Content data
    const contentData = {
        poem1: {
            title: "A Birthright Unearned",
            date: "May 2025",
            content: `Nepotism is a swift thievery
in the guarded vaults of merit.
It knocks on the chambers
in a familiar disguise—
borne in the cradles of households,
moulded in the clay of favoritism,
shaped gently by hands that once taught you to walk.

It spreads like ivy
through the pillars of society,
creeping and greasy 
until the walls begin to rot.

A moral treachery,
uncondemned by law,
it robs the worthy in broad daylight,
with no hesitation.
It wears the badge of hierarchy
in the hands of the elite
the lawmakers, the wise,
enthroned in modern institutional halls.A devil’s advocate
in the court of judgment,
it spits vice along its walk,
a whispering plague,
a silent yet fatal flaw.

India is no stranger
to its foreboding shadow
for years it haunted
the framework of democracy.
From cinema to the courts,
from politics to the gates of learning,
nepotism stands tall
not cloaked in shame,
but draped in the fabric of tradition.

But even rot can birth rebellion.
Ivy can be burnt down.
Through the murky waters,
a flame can rise.
This is no mythology game
but perhaps the myth
is just what needs to be seen.

The country crumbles
under the weight of its people,
and India has more grief
than silence can contain
wounds not stitched,
but sealed with shame,
a history penned
by those who never bled
Nepotism is the last to look upon
when hunger gnaws at the poor.
When all Indians are my brothers and sisters,
still the woman walks in fear,
each passing brother a question mark.
Maybe nepotism is just the tip of the thunder
beneath it lies a grave,
where once stood
a glorified, ancient culture.`
        },
        poem2: {
            title: "The Sandalwood voyage",
            date: "February 2025",
            content: `Turned and tossed like toys
Riding the mighty waves
Their master does what it wilts
To them his humble slaves

Rudely he flings their boats asunder
But calm can be his days
He is his own Master Wild
Unrepentant in his ways

His mood can change quite quickly
From sparkling blues to Greys,
From lapping shores softly
To howling roaring waves

Dark skinned me with coal black eyes
Bear their humble offering to the mighty God of
the sea,
Lowly fishing boats they bring

There are days when kind he is
They leave with catch intact
But on the night of the thunder clouds
The waves echoes the contract

Their women sit on the shores
Their eyes in trance like state
They pray with their hands joined
Who capitulates the brave husbands' fate

Will be tied saree knots with little rice grains
knought
With offerings that they have sought
Garlands of scented Sandalwood
From the wild woods they've bought

Dark skinned men return with catch
Bursting through the seams
With laughter ringing out they've come back
home
With the blistering aroma of sandalwood treats.`
        },
        poem3: {
            title: "The Burden of Knowing",
            date: "January 2025",
            content: `How am I a better creation than them? 
I'm yet to know  
Nature abounded them with the innocence of life 
The warmth of simplicity  
Here I am a tangled web of complexity  
They say “wisdom shall set you free” 
Yet I don't recall how often my feet have touched the wilderness, 
Unthinking Unburdened, 
Perhaps I'm yet to learn what freedom truly is. 
Seldom I ponder over 
The brimming wide eyes  
The little paws in dirt  
Making their ways on the turquoise porch  
"Aw" I exclaim!  
The feline hath never been mesmerised by its own fur 
Any significance to be given. 
Or perhaps I'm yet to learn what beauty is?  
Wandering through the meadows, the bustling street, the highways, the mountains 
Wherever cater its needs 
A vagabond yet its own master 
Propelling by the doors by dusk sometimes late dawn. 
And I sit here in patience as the aging tree witnessing the leaves and its hues throughout the 
spring and fall 
Wither past living their glory 
As my bark hardens further enclosing my tender sap deep within holding onto the roots 
In the fear of an approaching grim Strom. 
Maybe it's humane to be envious of the unattained and unclaimed parts, 
Mourn a little of the tenderness of soul that ignorance gives 
With the understanding that Almighty has sought, 
I still question  
How am I a better creation?`
        },
        poem4: {
            title: "The Burden of Knowing",
            date: "January 2025",
            content: `How am I a better creation than them? 
I'm yet to know  
Nature abounded them with the innocence of life 
The warmth of simplicity  
Here I am a tangled web of complexity  
They say “wisdom shall set you free” 
Yet I don't recall how often my feet have touched the wilderness, 
Unthinking Unburdened, 
Perhaps I'm yet to learn what freedom truly is. 
Seldom I ponder over 
The brimming wide eyes  
The little paws in dirt  
Making their ways on the turquoise porch  
"Aw" I exclaim!  
The feline hath never been mesmerised by its own fur 
Any significance to be given. 
Or perhaps I'm yet to learn what beauty is?  
Wandering through the meadows, the bustling street, the highways, the mountains 
Wherever cater its needs 
A vagabond yet its own master 
Propelling by the doors by dusk sometimes late dawn. 
And I sit here in patience as the aging tree witnessing the leaves and its hues throughout the 
spring and fall 
Wither past living their glory 
As my bark hardens further enclosing my tender sap deep within holding onto the roots 
In the fear of an approaching grim Strom. 
Maybe it's humane to be envious of the unattained and unclaimed parts, 
Mourn a little of the tenderness of soul that ignorance gives 
With the understanding that Almighty has sought, 
I still question  
How am I a better creation?`
        },
        story1: {
            title: "A night by the Ghats",
            date: "March 2025",
            content: `“The next train Delhi Varanasi intercity express will be arriving shortly on platform No. 6. ” 
the announcement echoed through the busy walkway as the crowd hastily rises up brisking 
down the chaotic halt as the last train of the night is approaching. Not a modest journey to be 
I suppose! as I jolted my grey suitcase through the unruly hustle making my way towards the 
berth. We've been a developing nation for quite a while yet the Indian railways still remains a 
remarkable sight to witness, for notable reasons of course if you are a passenger boarding on 
a general pass, the Britishers have long gone it seems leaving behind the machineries of what 
the government seems to be operating for centuries now indeed! Ha! It's been a while since 
the quirks have made me giggle Alas! the corporate drains more souls than it feeds. The skies 
are clear and the unduly smog canopying the streets of Delhi at night seems to haven't 
traveled this far. The bustling noises came to an halt as the flooding mass settled down on 
the passenger's seat. The engine rattled forward with the characteristic horn, the holy city of 
Ganga awaits as the destination. Nearly a decade it has been since the last visit, time sure 
flies by as the birds of the sky filt past. I remember the class of my childhood days when all 
would eagerly pack for the vacations, and then on first glance of dawn we would aboard the 
early train to my grandmother ’s house which is not a sight afar from the swift plains of the 
Ganga ghat. The lady has bestowed her entire life to this holy city. They say the death dances 
in the adobing pyres of the Manikarnika, thousands of those who crosses to the other side 
while thousand  on queue for their call. Each plight of stairs cornering down the street 
enclosing within itself a narrow passageway of gulleys and columns of labriynths painted in 
the local art of the city, each steeped wall with open windows of sub caste women with pots 
in their arms or widows in ashrams holding the beads of their holy chants, all the roads end 
up in the holy river it seems. That's how it has always been. The ghats behold the etiqueste of 
the city with numerous tales of life it buries, as though it captures the explorer's soul in a 
mortifying manner as to trap within itself for eternity. As a child I fancied the bed time 
granny tales often dating back to the 60s and 70s contemporary India, how the scrawny old 
man who haunts the peepal trees by the mounted lane or the Aghori who betwitch the spirits 
and subdues them in his spells. The ever compelling tales may seem to never end. The 
carriage engine squeaked into a steady bleak motion as the distant fog hoods the platform 
mnemonic. The skies are clouded and the sun has gone past the horizon by the while. I 
precariously ailed through the half empty staircase with a sigh of relief.  The city is still as 
lively with the similar posthumous uni scraper residential motifs with a single lane alleyway 
that cuts through the ghats into multiple gullies. If my memory doesn't fail me one of such 
steeped old houses used to be my grandmother’s though must be in a fragile dilapidated 
condition by now.  It was half past eleven already I had to find a guest room or lounge to rest 
my head in for the night. I helped myself fast with a cup of classic lemon tea and headed 
towards the marketway. Luckily enough I was escorted by one of the lounge owners on the 
way with the help of a few street vendors.  I went back to the ghats to witness the last prayer 
of the night, (the ratri aarti) the huge lit lamps surrounded the holy waters and the flakes of 
ashes from the pyres engulfed the sky as dimmed light bugs. The ghats were oddly brazen 
with a handful of people at sight. I leaned forward moving closer to down the burning pyres 
in order to catch a closer glimpse of the view.  The night has dawned and the handful of 
peeps are now distant as well except for the one old lady who has taken a seat near the dimly 
lited pyre looking into the river. The lady seemed to be in her 80s draped in a faded cotton 
woven saree with steel reemed spectacles that appeared to be unmended and rusted. Her 
body has wrinkled up with her hair unkempt, parted in the middle . Her face lit up in the 
flames had a dull complexion devoid of any expressions. “It's such an odd hour for an old 
lady to stay here”! However, I could care less,.... To Be Continued`
        }
//         story2: {
//             title: "Beyond the Veil",
//             date: "December 2023",
//             content: `She knew the mirror wasn't just reflecting. There was something else there, something that watched her with eyes that held the wisdom of centuries. Every night, as she prepared for bed, she would catch glimpses of movement in the glass—shadows that didn't belong to her.

// At first, she tried to ignore it, telling herself it was just her imagination playing tricks on her. But the presence grew stronger, more insistent. The mirror became a window to another world, one that existed just beyond the thin veil of reality.

// One night, as she stood before the mirror, she saw a face that wasn't her own. It was beautiful and terrible, ancient and eternal. The face smiled, and she knew that the veil between worlds was about to tear.`
//         },
//         story3: {
//             title: "Whispers of the Past",
//             date: "November 2023",
//             content: `In the old house at the end of the lane, time moved differently. The walls remembered every footstep, every whisper, every secret that had ever been shared within their embrace. The current owner, an elderly woman named Margaret, had lived there for fifty years, but she was not the first to hear the whispers of the past.

// The house had been built in the early 1800s, and each generation had left its mark. The walls told stories of love and loss, of joy and sorrow, of lives that had come and gone like the seasons.

// Margaret had learned to listen to these whispers, to understand their meaning. They were not just echoes of the past, but warnings and wisdom from those who had walked these halls before. And tonight, as the wind howled through the ancient trees, the whispers were louder than ever.`
//         }
    };

    // Modal elements
    const modal = document.getElementById('contentModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDate = modal.querySelector('.modal-date');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.modal-close');

    // Function to open modal
    function openModal(contentId) {
        const content = contentData[contentId];
        if (content) {
            modalTitle.textContent = content.title;
            modalDate.textContent = content.date;
            modalBody.textContent = content.content;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners for read buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.writing-card');
            const contentId = card.dataset.content;
            openModal(contentId);
        });
    });

    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 1s ease-out';
        observer.observe(section);
    });
});
